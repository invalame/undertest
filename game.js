
// -----------------------------------------------------
// Variables

// -----------------------------------------------------
// Variables
let audioPlayer = new Audio(); // Created in memory, not in DOM
let currentSong = {};
let guessCount = 0;

// VARIABLE GLOBAL PARA EL COMANDO SECRETO
window.kinoUnlocked = false;

// Duraciones de intentos (DINÃƒÂƒÃ‚ÂMICO)
function getDurations() {
    if (currentMode === 'artist' || currentMode === 'album') {
        return [0.5, 2, 4, 6];
    }
    return [0.5, 2, 4, 8, 11, 15];
}

function getTotalGameDuration() {
    const durations = getDurations();
    return durations[durations.length - 1];
}


let hasGuessedCorrectly = false;
let availableSongs = [];



// Snippet playback state
let snippetState = 'idle'; // 'idle' | 'playing' | 'paused'
let snippetTargetTime = 0; // The exact audio time where snippet should stop
let animationFrameId = null; // For requestAnimationFrame cleanup

// Core audio variables
let gameStartTime = 0; // Random start point within the song

let isGameOver = false; // Moved here for global access


audioPlayer.addEventListener('timeupdate', () => {
    if (snippetState === 'playing' && !isGameOver) {
        if (audioPlayer.currentTime >= snippetTargetTime) {
            finishSnippet();
        }
    }
});

// nuevo: historial para evitar repeticiÃƒÂƒÃ‚Â³n entre juegos.
let lastTwoIndices = [-1, -1]; // almacena los ÃƒÂƒÃ‚Â­ndices de las dos ÃƒÂƒÃ‚Âºltimas canciones jugadas de 'biblioteca'
let currentBlobUrl = null; // Para ocultar la URL del archivo
let currentStartByte = null;

// ==================== AUDIO WORKER - VERSIÓN ESTABLE ====================

async function cleanupAudio(isNewSong = false, shouldResetTime = true) {
    if (typeof audioPlayer !== 'undefined' && audioPlayer) {
        audioPlayer.pause();
        if (currentBlobUrl) {
            URL.revokeObjectURL(currentBlobUrl);
            currentBlobUrl = null;
        }
        audioPlayer.removeAttribute('src');
        if (shouldResetTime) {
            audioPlayer.currentTime = 0;
        }
    }
    if (isNewSong) {
        currentStartByte = null;
        snippetState = 'idle';
    }
}

function getCleanFileName(songFile) {
    if (!songFile) return "";
    let name = songFile;
    if (name.includes("http")) {
        name = name.split('/').pop();
        try { name = decodeURIComponent(name); } catch (e) {}
    } else if (name.includes("/")) {
        name = name.split('/').pop();
    }
    return name;
}

async function loadAudioLevel(songFile, level) {
    if (!songFile) return;

    // Persistencia del tiempo para continuidad tras skip
    // Hacemos que siempre continúe desde donde estaba (excepto nivel 1 inicial claro, que lastTime sería 0)
    const shouldContinue = level > 1;
    const lastTime = shouldContinue ? audioPlayer.currentTime : 0;

    await cleanupAudio(level === 1, !shouldContinue);



    // Limpiar nombre de forma consistente
    const cleanName = getCleanFileName(songFile);

    // CHECK LOCALSTORAGE FOR START BYTE
    const lsKey = `ul_start_${cleanName}`;
    const savedStart = localStorage.getItem(lsKey);
    if (savedStart !== null) {
        currentStartByte = parseInt(savedStart, 10);
    }

    // Codificar en Base64 para ocultar el nombre en el panel Network (F12)
    // IMPORTANTE: El Worker espera el nombre limpio para buscarlo en R2
    const base64Id = btoa(encodeURIComponent(cleanName));
    let fetchUrl = `${WORKER_URL}?id=${base64Id}&level=${level}&mode=${currentMode}`;
    
    if (currentStartByte !== null) {
        fetchUrl += `&start=${currentStartByte}`;
    }

    try {
        const response = await fetch(fetchUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const startByte = response.headers.get('X-Start-Byte');
        if (startByte) {
            currentStartByte = parseInt(startByte, 10);
            localStorage.setItem(lsKey, currentStartByte); // Guardar
        }

        const blob = await response.blob();
        currentBlobUrl = URL.createObjectURL(blob);
        audioPlayer.src = currentBlobUrl;
        
        if (shouldContinue) {
            audioPlayer.currentTime = lastTime;
        }

        gameStartTime = 0;

        // Configurar duración del fragmento
        const durations = getDurations();
        snippetTargetTime = durations[level - 1] || 15;


        // Pequeño delay para estabilidad
        await new Promise(r => setTimeout(r, 50));

        audioPlayer.onerror = () => console.warn(`[Audio] Error en level ${level}`);
        
        // FIX: Handle natural end of snippet to update UI
        audioPlayer.onended = finishSnippet;

    } catch (e) {
    }
}
// HISTORIAL PERSISTENTE DE CANCIONES JUGADAS
// Se guardan los nombres de las canciones ya jugadas para no repetir hasta completar la lista
let playedSongsNormal = JSON.parse(localStorage.getItem('playedSongsNormal')) || [];
let playedSongsArtist = JSON.parse(localStorage.getItem('playedSongsArtist')) || [];

// NUEVO: Sistema de rachas
let winStreak = parseInt(localStorage.getItem('winStreak')) || 0;
let artistStreak = parseInt(localStorage.getItem('artistStreak')) || 0; // NUEVO
const streakEl = document.getElementById('streak');

// NUEVO: Sistema salva rachas
let streaksavers = parseInt(localStorage.getItem('streaksavers')) || 0;
const minstreak = 13;

// NUEVO: Variables para Modo Artista
let currentMode = 'normal'; // 'normal' | 'artist'
let selectedArtist = null;
let artists = new Set();
let artistList = []; // Array ordenado de artistas para bÃƒÂƒÃ‚Âºsqueda

// NUEVO: Variables para Modo ÃƒÂƒÃ‚Âlbum
let selectedAlbum = null;
let albumList = []; // Array de nombres de ÃƒÂƒÂ¡lbumes
let currentAlbumSongs = []; // Canciones del ÃƒÂƒÂ¡lbum seleccionado

// dom
const playButton = document.getElementById('play-button');
const skipButton = document.getElementById('skip-button-standalone');
const searchInput = document.getElementById('search-input');
const songsList = document.getElementById('songs-list');
const progressBarFill = document.getElementById('progress-bar-fill');
const segmentsOverlay = document.getElementById('segments-overlay');
const timerTextEl = document.getElementById('current-timer-text');
const volumeSlider = document.getElementById('volume-slider');
const gameOverMessage = document.getElementById('game-over-message');
const gameOverContent = document.getElementById('game-over-content'); // nuevo
const gameResult = document.getElementById('game-result');
const answerLabel = document.getElementById('answer-label'); // nuevo
const correctAnswerEl = document.getElementById('correct-answer'); // renombrado

// nuevos elementos del reproductor completo


// elementos modo artista
const artistSection = document.getElementById('artist-section');
const artistSearchInput = document.getElementById('artist-search-input');
const artistListEl = document.getElementById('artist-list');
const currentArtistDisplay = document.getElementById('current-artist-display');
const currentArtistDisplayHeader = document.getElementById('current-artist-display-header');
const modeNormalBtn = document.getElementById('mode-normal');
const modeArtistBtn = document.getElementById('mode-artist');
const modeAlbumBtn = document.getElementById('mode-album');

// elementos modo album
const albumSection = document.getElementById('album-section');
const albumSearchInput = document.getElementById('album-search-input');
const albumListEl = document.getElementById('album-list');
const currentAlbumDisplay = document.getElementById('current-album-display');
const albumArtDisplay = document.getElementById('album-art-display');

// iconos svg para el boton (con bordes redondeados sutiles)
const iconPlay = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" stroke="white" stroke-width="2" stroke-linejoin="round" /></svg>';
const iconPause = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" stroke="white" stroke-width="2" stroke-linejoin="round" /></svg>';

// SOUND EFFECTS
const soundClick = new Audio('sounds/sound_click.mp3');
const soundGameOver = new Audio('sounds/sound_game_over.mp3');

function playSound(type) {
    // Reset to start to allow rapid re-play
    if (type === 'click') {
        soundClick.currentTime = 0;
        soundClick.play().catch(e => console.warn('Error playing click sound:', e));
    } else if (type === 'gameover') {
        soundGameOver.currentTime = 0;
        soundGameOver.play().catch(e => console.warn('Error playing gameover sound:', e));
    }
}

// -----------------------------------------------------
// helpers
function formatSeconds(value) {
    // CORREGIDO: Number.isInteger, toFixed
    return Number.isInteger(value) ? `${value}s` : `${value.toFixed(1)}s`;
}

// nueva funciÃƒÂƒÃ‚Â³n: formatear tiempo a mm:ss
function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// calcula el porcentaje en la barra basado en el tiempo total del juego
function getPercentage(timeinseconds) {
    return (timeinseconds / getTotalGameDuration()) * 100;
}

// Helper para actualizar el display del artista en el header
function updateArtistHeaderDisplay(artistName) {
    if (!currentArtistDisplayHeader) return;

    if (artistName && currentMode === 'artist') {
        currentArtistDisplayHeader.textContent = artistName;
        currentArtistDisplayHeader.classList.add('show');
    } else {
        currentArtistDisplayHeader.textContent = '';
        currentArtistDisplayHeader.classList.remove('show');
    }
}

// visual: renderiza las divisiones de la barra de progreso
function renderProgressSegments() {
    if (!segmentsOverlay) return;
    segmentsOverlay.innerHTML = "";
    const durations = getDurations();
    const total = getTotalGameDuration();

    let previousCumulativeTime = 0;
    durations.forEach((cumulativeTime, index) => {
        const segmentTime = cumulativeTime - previousCumulativeTime;

        const segment = document.createElement('div');
        segment.classList.add('progress-segment');
        segment.style.width = `${(segmentTime / total) * 100}%`;
        segmentsOverlay.appendChild(segment);
        previousCumulativeTime = cumulativeTime;

        if (index < durations.length - 1) {
            const percentage = getPercentage(cumulativeTime);

            const divider = document.createElement('div');
            divider.classList.add('segment-divider');

            // FIX: Visual adjustment for the first divider (0.1s)
            if (index === 0) {
                divider.style.left = `calc(${percentage}% + 3px)`; // Shift right slightly
            } else {
                divider.style.left = `${percentage}%`;
            }

            segmentsOverlay.appendChild(divider);
        }
    });
}

// NUEVO: Renderizar cajas de intentos dinÃƒÂƒÂ¡micamente
function renderGuessBoxes() {
    const container = document.getElementById('guess-boxes');
    if (!container) return;
    container.innerHTML = '';

    const durations = getDurations();
    const count = durations.length;

    for (let i = 0; i < count; i++) {
        const box = document.createElement('div');
        box.className = 'guess-box';
        container.appendChild(box);
    }
}

// FUNCIÓN RACHA - Solo visible en modo normal
function updateStreakDisplay() {
    const streakContainer = document.getElementById('streak');
    const streakNumber = document.getElementById('streak-number');
    const streakIcon = document.getElementById('streak-icon');
    if (!streakContainer || !streakNumber || !streakIcon) return;

    // Solo visible en modo normal
    if (currentMode !== 'normal') {
        streakContainer.style.display = 'none';
        return;
    }
    streakContainer.style.display = 'flex';

    const currentStreak = winStreak;
    streakNumber.textContent = currentStreak;

    let color = '';
    let iconSrc = '';

    if (currentStreak <= 2) {
        color = '#e2e2e2';
        iconSrc = 'img/racha_fuego_gris.png';
    } else if (currentStreak <= 10) {
        color = '#00a900';
        iconSrc = 'img/racha_fuego_verde.png';
    } else if (currentStreak <= 35) {
        color = '#ffab00';
        iconSrc = 'img/racha_fuego_amarillo.png';
    } else if (currentStreak <= 70) {
        color = '#ff4d00';
        iconSrc = 'img/racha_fuego_roja.png';
    } else if (currentStreak <= 150) {
        color = '#8d00ff';
        iconSrc = 'img/racha_fuego_violeta.png';
    } else {
        color = '#ff00ff';
        iconSrc = 'img/racha_fuego_rosa.png';
    }

    streakNumber.style.color = color;
    streakIcon.src = iconSrc;
    streakContainer.style.textShadow = 'none';
}

// FunciÃƒÂƒÃ‚Â³n auxiliar para interpolar colores (degradado suave)
function lerpColor(color1, color2, factor) {
    const hex = (c) => {
        const hex = c.replace('#', '');
        return [parseInt(hex.substr(0, 2), 16), parseInt(hex.substr(2, 2), 16), parseInt(hex.substr(4, 2), 16)];
    };
    const rgb1 = hex(color1);
    const rgb2 = hex(color2);
    const result = rgb1.map((c, i) => Math.round(c + factor * (rgb2[i] - c)));
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
}

function updateStreakSaverUI() {
    const streakSaverEl = document.getElementById('streak-saver-ui');
    if (!streakSaverEl) return;
    // Sistema de vidas desactivado temporalmente
    streakSaverEl.style.display = 'none';
}

// -----------------------------------------------------
// LÃƒÂƒÃ¢Â€ÂœGICA MODO ARTISTA

function extractArtist(songName) {
    // El artista son las palabras que esten antes de una "," o un "-"
    // Prioridad: coma, luego guion.
    let separatorIndex = songName.indexOf(',');
    if (separatorIndex === -1) {
        separatorIndex = songName.indexOf('-');
    }

    if (separatorIndex !== -1) {
        return songName.substring(0, separatorIndex).trim();
    }
    return ""; // Fallback o si no tiene separador (raro en este formato)
}

// NUEVO: Helper especÃƒÂƒÃ‚Â­fico para la lÃƒÂƒÃ‚Â³gica de "guess box amarilla"
// Solo considera el guion como separador, ignorando comas.
function extractArtistForGuess(songName) {
    let separatorIndex = songName.indexOf('-');
    if (separatorIndex !== -1) {
        return songName.substring(0, separatorIndex).trim();
    }
    return "";
}

function populateArtists() {
    artists.clear();
    // Usar bibliotecaArtist para poblar la lista de artistas
    bibliotecaArtist.forEach(song => {
        // EXCLUDE TROLL SONGS
        if (song.nombre === "Matias Fisher - Muerte en Halloween" ||
            song.nombre === "Chiki Wanted - que es el under" ||
            song.nombre === "PILF - ENTRO A LA CANCHA" ||
            song.nombre === "PILF - FUMO UNO FUMO DOS" ||
            song.nombre === "PILF - HIT" ||
            song.nombre === "PILF - TANTA GIRA" ||
            song.nombre === "Red Shine, MAGNESIO - ELDEN RING" ||
            song.nombre === "papirola - sos mi papirola") {
            return;
        }

        // COMANDO SECRETO: Ocultar kino frizza por defecto
        if (song.nombre.toLowerCase().includes("kino frizza") && !window.kinoUnlocked) {
            return;
        }
        const artist = extractArtist(song.nombre);
        if (artist) {
            artists.add(artist);
        }

        // COMANDO SECRETO DE CONSOLA
        window.comandoKino = function () {
            window.kinoUnlocked = true;
            populateArtists();

            // Intentar actualizar la UI (si existe el selector)
            // Como no tengo el ID exacto del selector, asumimos que al cambiar de modo se refresca
            // o llamamos a init/render si fuera accesible.
            // Pero populateArtists actualiza la lista global 'artistList', asÃƒÂƒÃ‚Â­ que cualquier
            // renderizado subsecuente lo tomarÃƒÂƒÂ¡.

            // Forzar actualizaciÃƒÂƒÃ‚Â³n si estamos en modo artista
            if (typeof renderModeSelector === 'function') {
                renderModeSelector();
            } else {
                // Fallback: Intentar disparar evento si existe
                console.log("Artista 'kino frizza' desbloqueado. Si no aparece, cambia de modo y vuelve a entrar.");
            }

            console.log("%c DESBLOQUEASTE EL FRICHO", "color: gold; font-size: 20px; font-weight: bold;");
            return "juga con las parodias de la cabra";
        };
    });
    artistList = Array.from(artists).sort((a, b) => a.localeCompare(b));
}

// -----------------------------------------------------
// LÃƒÂƒÃ¢Â€ÂœGICA MODO ÃƒÂƒÃ‚ÂLBUM

function populateAlbums() {
    albumList = albumsData.map(a => a.name).sort((a, b) => a.localeCompare(b));
}

function filterAlbums(query) {
    if (!query) return albumList;
    const lowerQuery = query.toLowerCase();
    return albumList.filter(name => name.toLowerCase().includes(lowerQuery));
}

function renderAlbumSuggestions(list) {
    albumListEl.innerHTML = "";
    if (list && list.length > 0) {
        list.forEach(albumName => {
            const albumInfo = albumsData.find(a => a.name === albumName);
            const div = document.createElement('div');
            div.className = 'album-item';

            const textSpan = document.createElement('span');
            textSpan.className = 'album-item-text';
            textSpan.textContent = albumName;

            const img = document.createElement('img');
            img.className = 'album-item-image';
            if (albumInfo && albumInfo.cover) {
                img.src = albumInfo.cover;
                img.alt = albumName;
            } else {
                img.style.display = 'none';
            }

            div.appendChild(textSpan);
            div.appendChild(img);
            div.onclick = () => selectAlbum(albumName);
            albumListEl.appendChild(div);
        });
        albumListEl.classList.add('show');
    } else {
        albumListEl.classList.remove('show');
    }
}

async function selectAlbum(albumName) {
    if (selectedAlbum === albumName) {
        albumListEl.classList.remove('show');
        return;
    }

    selectedAlbum = albumName;
    albumSearchInput.value = albumName;
    albumSearchInput.classList.add('centered-text');
    albumListEl.classList.remove('show');

    const albumInfo = albumsData.find(a => a.name === albumName);
    if (albumInfo) {
        availableSongs = [...albumInfo.songs];

        // Update album art container
        const container = document.getElementById('album-art-container');
        const albumNameDisplay = document.getElementById('album-name-display');
        const albumArtDisplay = document.getElementById('album-art-display');

        if (albumInfo.cover && container && albumArtDisplay && albumNameDisplay) {
            albumArtDisplay.src = albumInfo.cover;
            albumNameDisplay.textContent = albumName;
            container.classList.add('show');
        } else if (container) {
            container.classList.remove('show');
        }
    } else {
        availableSongs = [];
        const container = document.getElementById('album-art-container');
        if (container) container.classList.remove('show');
    }

    saveModeState('album');
    resetGame(true);
}

// Event Listeners para bÃƒÂƒÃ‚Âºsqueda de ÃƒÂƒÂ¡lbum
if (albumSearchInput) {
    albumSearchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const matches = query ? filterAlbums(query) : albumList;
        renderAlbumSuggestions(matches);
    });

    albumSearchInput.addEventListener('click', () => {
        if (albumList.length === 0) populateAlbums();
        albumSearchInput.classList.remove('centered-text');
        const query = albumSearchInput.value;
        const matches = query ? filterAlbums(query) : albumList;
        renderAlbumSuggestions(matches);
    });

    albumSearchInput.addEventListener('focus', () => {
        albumSearchInput.classList.remove('centered-text');
    });

    albumSearchInput.addEventListener('blur', () => {
        if (selectedAlbum && albumSearchInput.value === selectedAlbum) {
            albumSearchInput.classList.add('centered-text');
        }
    });
}

// Close dropdown on outside click
document.addEventListener('click', (e) => {
    if (albumSearchInput && albumListEl) {
        if (!albumSearchInput.contains(e.target) && !albumListEl.contains(e.target)) {
            albumListEl.classList.remove('show');
        }
    }
});

// PERSISTENCIA DE ESTADO
let normalModeState = null;
let artistModeState = null;
let albumModeState = null;

function saveModeState(mode) {
    const state = {
        currentSong: currentSong,
        guessCount: guessCount,
        hasGuessedCorrectly: hasGuessedCorrectly,
        availableSongs: [...availableSongs],
        guesses: getGuessStates(), // Guardar estado visual
        gameStartTime: gameStartTime, // Guardar tiempo de inicio aleatorio
        currentStartByte: currentStartByte // Guardar byte de inicio para F5
    };

    if (mode === 'artist') {
        state.selectedArtist = selectedArtist;
        artistModeState = state;
    } else if (mode === 'album') {
        state.selectedAlbum = selectedAlbum;
        albumModeState = state;
    } else {
        normalModeState = state;
    }

    // PERSISTENCIA: Guardar en localStorage
    const fullState = {
        normal: normalModeState,
        artist: artistModeState,
        album: albumModeState,
        currentMode: currentMode,
        wonSongsInStreak: Array.from(wonSongsInStreak) // Convert Set to Array
    };
    localStorage.setItem('underless_save_v1', JSON.stringify(fullState));
}

// --- UNIQUE STREAK LOGIC ---
let wonSongsInStreak = new Set(); // Stores song names already won in current streak

function showStreakWarning() {
    const warning = document.getElementById('streak-warning');
    if (warning) {
        warning.classList.add('show');
        setTimeout(() => {
            warning.classList.remove('show');
        }, 2200); // reduced from 3.5s
    }
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('underless_save_v1');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            normalModeState = parsed.normal;
            artistModeState = parsed.artist;
            albumModeState = parsed.album;
            if (parsed.currentMode) {
                currentMode = 'normal';
            }

            // Load won songs set
            if (parsed.wonSongsInStreak) {
                wonSongsInStreak = new Set(parsed.wonSongsInStreak);
            } else {
                wonSongsInStreak = new Set();
            }

        } catch (e) {
            console.error("Error loading game state:", e);
            localStorage.removeItem('underless_save_v1');
        }
    }
}

async function restoreModeState(mode) {
    let state;
    if (mode === 'artist') state = artistModeState;
    else if (mode === 'album') state = albumModeState;
    else state = normalModeState;

    renderGuessBoxes();
    renderProgressSegments();

    if (!state) {
        // Si no hay estado guardado, resetear de cero
        availableSongs = [];
        if (mode === 'artist') selectedArtist = null;
        if (mode === 'album') selectedAlbum = null;
        resetGame(true);
        return;
    }

    // Restaurar variables
    currentSong = state.currentSong;
    guessCount = state.guessCount;
    hasGuessedCorrectly = state.hasGuessedCorrectly;
    availableSongs = state.availableSongs;
    if (mode === 'artist') {
        selectedArtist = state.selectedArtist;
        if (selectedArtist) {
            // currentArtistDisplay.textContent = `Artista: ${selectedArtist}`; 
            // updateArtistHeaderDisplay(selectedArtist); 
            // Set input value to selected artist
            if (artistSearchInput) {
                artistSearchInput.value = selectedArtist;
                artistSearchInput.classList.add('centered-text');
            }

            if (availableSongs && availableSongs.length > 0) {
                const isConsistent = availableSongs.every(s => extractArtist(s.nombre) === selectedArtist);
                if (!isConsistent) {
                    console.warn("Detected inconsistent songs in artist mode state. Resetting pool.");
                    availableSongs = [];
                }
            }
        } else {
            // currentArtistDisplay.textContent = "Selecciona un artista";
            // updateArtistHeaderDisplay(null); 
            if (artistSearchInput) artistSearchInput.value = "";
            availableSongs = [];
        }
    } else if (mode === 'album') {
        // Modo Ã¡lbum
        selectedAlbum = state.selectedAlbum || null;
        if (selectedAlbum) {
            if (albumSearchInput) {
                albumSearchInput.value = selectedAlbum;
                albumSearchInput.classList.add('centered-text');
            }

            // Update Album Art Container with labels
            const albumInfo = albumsData.find(a => a.name === selectedAlbum);
            const container = document.getElementById('album-art-container');
            const albumNameDisplay = document.getElementById('album-name-display');
            const albumArtDisplay = document.getElementById('album-art-display');

            if (albumInfo && albumInfo.cover && container && albumArtDisplay && albumNameDisplay) {
                albumArtDisplay.src = albumInfo.cover;
                albumNameDisplay.textContent = selectedAlbum;
                container.classList.add('show');
            }
        } else {
            if (albumSearchInput) albumSearchInput.value = "";
            availableSongs = [];
            const container = document.getElementById('album-art-container');
            if (container) container.classList.remove('show');
        }
    } else {
        // Modo normal
        // updateArtistHeaderDisplay(null);
    }

    // Restaurar casillas visualmente
    const boxes = document.querySelectorAll('.guess-box');
    // Limpiar primero
    boxes.forEach(b => { b.className = 'guess-box'; b.textContent = ''; });

    // NUEVO: Restaurar estado visual exacto
    if (state.guesses) {
        restoreGuessStates(state.guesses);
    } else if (state.guessBoxStates) {
        // Fallback para compatibilidad con versiones anteriores de guardado
        restoreGuessStates(state.guessBoxStates);
    }

    // Restaurar audio con blob para mantener ofuscación
    if (currentSong.archivo) {
        gameStartTime = 0;

        await cleanupAudio(false);

        // Restaurar currentStartByte desde el estado guardado
        // para que loadAudioLevel envíe el mismo start al Worker
        if (state.currentStartByte !== undefined && state.currentStartByte !== null) {
            currentStartByte = state.currentStartByte;
            // Asegurar que también esté en localStorage para que loadAudioLevel lo encuentre
            const cleanName = getCleanFileName(currentSong.archivo);
            localStorage.setItem(`ul_start_${cleanName}`, currentStartByte);
        }
        loadAudioLevel(currentSong.archivo, guessCount + 1);
        const enablePlayOnRestore = () => {
            audioPlayer.currentTime = 0;
            playButton.removeAttribute('disabled');
            skipButton.disabled = false;
            updatePlayIcon(false);
            audioPlayer.oncanplaythrough = null;
            audioPlayer.oncanplay = null;
            audioPlayer.onerror = null;
        };

        audioPlayer.oncanplaythrough = enablePlayOnRestore;
        // Fallback: some browsers fire canplay but not canplaythrough
        audioPlayer.oncanplay = enablePlayOnRestore;

        // FIX: Handle audio load errors (e.g. 404, corrupted file)
        audioPlayer.onerror = () => {
            console.error("Audio error on restore");
            playButton.setAttribute('disabled', '');
            updatePlayIcon(false);
            audioPlayer.oncanplaythrough = null;
            audioPlayer.oncanplay = null;
            audioPlayer.onerror = null;
        };
        // No reproducimos automÃ¡ticamente, el usuario debe dar play
    } else {
        // Si no habÃƒÂƒÃ‚Â­a canciÃƒÂƒÃ‚Â³n (ej. artista no seleccionado), resetear UI
        audioPlayer.src = "";
        playButton.setAttribute('disabled', '');
        skipButton.disabled = true;


        if (mode === 'artist' && !selectedArtist) {
            document.getElementById('search-container').classList.add('disabled');
        }
        if (mode === 'album' && !selectedAlbum) {
            document.getElementById('search-container').classList.add('disabled');
        }
    }

    // Actualizar marcador de tiempo
    updateTimeMarker(guessCount);

    // Actualizar estado de botones
    if (hasGuessedCorrectly) {
        document.getElementById('search-container').classList.add('disabled');
        playButton.setAttribute('disabled', '');
        skipButton.disabled = true;
    } else {
        if (currentSong.archivo) {
            document.getElementById('search-container').classList.remove('disabled');
            // FIX: Do NOT enable play button here â€” wait for oncanplaythrough/oncanplay event
            // which is already set above. Enabling prematurely causes play() to fail silently.
        }
    }

    updateStreakDisplay();
    updateStreakSaverUI();

    // Si el juego terminÃƒÂƒÃ‚Â³, mostrar el modal de nuevo
    if (hasGuessedCorrectly) {
        showGameOver(true);
    } else if (guessCount >= getDurations().length) {
        showGameOver(false);
    }
}


async function switchMode(mode) {
    playSound('click');
    if (currentMode === mode) return;

    pauseAudioInternal();

    // CRITICAL FIX: Stop everything and CLEAR SOURCE immediately to prevent ghost audio
    audioPlayer.src = "";
    if (currentBlobUrl) {
        URL.revokeObjectURL(currentBlobUrl);
        currentBlobUrl = null;
    }

    // FIX: Reset progress bar visually when switching modes
    if (progressBarFill) progressBarFill.style.width = '0%';

    saveModeState(currentMode);

    currentMode = mode;

    // Actualizar botones y secciones
    modeNormalBtn.classList.toggle('active', mode === 'normal');
    modeArtistBtn.classList.toggle('active', mode === 'artist');
    modeAlbumBtn.classList.toggle('active', mode === 'album');

    artistSection.classList.toggle('show', mode === 'artist');
    if (mode === 'artist') populateArtists();

    albumSection.classList.toggle('show', mode === 'album');
    if (mode === 'album') populateAlbums();

    // Hide album art container if not in album mode
    const albumArtContainer = document.getElementById('album-art-container');
    if (mode !== 'album' && albumArtContainer) {
        albumArtContainer.classList.remove('show');
    }

    // Hide/show lives UI based on mode (no lives in album mode)
    const streakSaverUI = document.getElementById('streak-saver-ui');
    if (streakSaverUI) {
        if (mode === 'album') {
            streakSaverUI.style.display = 'none';
        } else {
            streakSaverUI.style.display = 'block';
        }
    }

    await restoreModeState(mode);
}

function filterArtists(query) {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    const queryTerms = lowerQuery.split(/\s+/);

    return artistList.filter(artist => {
        const lowerArtist = artist.toLowerCase();
        return queryTerms.every(term => lowerArtist.includes(term));
    });
}

function selectArtist(artist) {
    selectedArtist = artist;
    // currentArtistDisplay.textContent = `Artista: ${artist}`;
    // updateArtistHeaderDisplay(artist); 

    // FUSED: Update search input to show selected artist
    artistSearchInput.value = artist;
    artistSearchInput.classList.add('centered-text');

    artistListEl.classList.remove('show');

    // Resetear juego para empezar con el artista seleccionado
    availableSongs = []; // Limpiar pool para obligar a recargar con el nuevo artista
    resetGame(true);
    saveModeState('artist'); // Guardar selecciÃƒÂƒÃ‚Â³n de artista
}

// Event Listeners para bÃƒÂƒÃ‚Âºsqueda de artista
// Helper para renderizar la lista de artistas
function renderArtistSuggestions(list) {
    artistListEl.innerHTML = '';
    if (list && list.length > 0) {
        list.forEach(artist => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = artist;
            div.onclick = () => selectArtist(artist);
            artistListEl.appendChild(div);
        });
        artistListEl.classList.add('show');
    } else {
        artistListEl.classList.remove('show');
    }
}

// Event Listeners para bÃƒÂƒÃ‚Âºsqueda de artista
artistSearchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    // Si hay texto, filtra. Si estÃƒÂƒÂ¡ vacÃƒÂƒÃ‚Â­o, muestra todos.
    const matches = query ? filterArtists(query) : artistList;
    renderArtistSuggestions(matches);
});

// Mostrar todos al hacer click (focus)
artistSearchInput.addEventListener('click', () => {
    artistSearchInput.classList.remove('centered-text'); // Align left for editing
    const query = artistSearchInput.value;
    const matches = query ? filterArtists(query) : artistList;
    renderArtistSuggestions(matches);
});

artistSearchInput.addEventListener('focus', () => {
    artistSearchInput.classList.remove('centered-text');
});

artistSearchInput.addEventListener('blur', () => {
    if (selectedArtist && artistSearchInput.value === selectedArtist) {
        artistSearchInput.classList.add('centered-text');
    }
});


document.addEventListener('click', (e) => {
    if (!artistSearchInput.contains(e.target) && !artistListEl.contains(e.target)) {
        artistListEl.classList.remove('show');
    }
});

async function resetGame(forceNew = false) {
    // STOP CONFETTI: Immediately clear when starting new round
    if (typeof confetti !== 'undefined' && confetti.reset) {
        confetti.reset();
    }

    // CRITICAL: Reset game over and full song playback state
    audioPlayer.pause();
    // Force clear immediately to prevent old song from playing during async fetch
    audioPlayer.src = "";

    isGameOver = false;
    snippetState = 'idle';


    audioPlayer.onloadedmetadata = null; // limpiar listeners
    audioPlayer.onended = null;

    isSnippetPlaying = false;
    snippetRemainingMs = 0;
    snippetDurationMs = 0;

    // Si se fuerza un juego nuevo (botÃƒÂƒÃ‚Â³n reset/play again), borramos la canciÃƒÂƒÃ‚Â³n guardada
    if (forceNew) {
        playSound('click');
        localStorage.removeItem('savedSong');
    }

    // availableSongs se rellena dentro de selectRandomSong si estÃƒÂƒÂ¡ vacÃƒÂƒÃ‚Â­o
    selectRandomSong();

    guessCount = 0;
    hasGuessedCorrectly = false;
    searchInput.value = "";
    songsList.classList.remove('show');
    songsList.classList.remove('show');
    gameOverMessage.classList.remove('show');

    // Hide share container
    const shareCont = document.getElementById('share-container');
    if (shareCont) shareCont.style.display = 'none';
    const mobBtn = document.getElementById('mobile-share-btn');
    if (mobBtn) mobBtn.style.display = 'none';

    // DELAYED: Clean up colors (so they don't flash during fade out)
    setTimeout(() => {
        gameOverContent.classList.remove('win', 'lose');
    }, 300);

    // Si no hay canciÃƒÂƒÃ‚Â³n seleccionada (modo artista sin artista), deshabilitar bÃƒÂƒÃ‚Âºsqueda
    if (!currentSong.archivo) {
        document.getElementById('search-container').classList.add('disabled');
    } else {
        document.getElementById('search-container').classList.remove('disabled');
    }

    playButton.setAttribute('disabled', '');
    // Disable skip while loading
    skipButton.disabled = true;
    // Show loader
    playButton.innerHTML = '<div class="loader"></div>';

    clearGuessBoxes();


    gameStartTime = 0;

    updateTimeMarker(0);
    if (progressBarFill) progressBarFill.style.width = '0%';
    // updatePlayIcon(false); // REMOVED: This was overwriting the loader immediately!


    await cleanupAudio(true);
    
    // corrección: usar oncanplaythrough para activar el botón solo cuando el audio está listo
    // IMPORTANT: Define and attach listeners BEFORE awaiting loadAudioLevel to avoid missing the event
    const enablePlayOnReset = () => {
        audioPlayer.currentTime = 0;
        playButton.removeAttribute('disabled');
        // Enable skip
        skipButton.disabled = false;
        // Restore play icon
        updatePlayIcon(false);
        audioPlayer.oncanplaythrough = null;
        audioPlayer.oncanplay = null;
        audioPlayer.onerror = null;
        // Guardar estado AHORA que currentStartByte ya fue recibido del Worker
        saveModeState(currentMode);
    };

    audioPlayer.oncanplaythrough = enablePlayOnReset;
    // Fallback: some browsers fire canplay but not canplaythrough
    audioPlayer.oncanplay = enablePlayOnReset;

    if (currentSong.archivo) {
        await loadAudioLevel(currentSong.archivo, 1);
    }

    // FIX: Handle audio load errors (e.g. 404, corrupted file)
    audioPlayer.onerror = () => {
        console.error("Audio load error");
        playButton.setAttribute('disabled', '');
        updatePlayIcon(false);
        audioPlayer.oncanplaythrough = null;
        audioPlayer.oncanplay = null;
        audioPlayer.onerror = null;
    };

    // Actualizar display de racha al reset
    updateStreakDisplay();
    updateStreakSaverUI();

    // PERSISTENCIA: Guardar estado inmediatamente al iniciar nuevo juego
    saveModeState(currentMode);
}

// Nueva funciÃƒÂƒÃ‚Â³n para reseteo completo (botÃƒÂƒÃ‚Â³n REINICIAR)
function fullReset() {
    if (currentMode === 'normal') {
        winStreak = 0;
        streaksavers = 0;
        localStorage.setItem('winStreak', winStreak);
        localStorage.setItem('streaksavers', streaksavers);
    } else {
        artistStreak = 0;
        localStorage.setItem('artistStreak', artistStreak);
    }

    // Limpiar estado guardado del juego
    localStorage.removeItem('underless_save_v1');
    normalModeState = null;
    artistModeState = null;
    albumModeState = null;

    // Llamar al reset normal del juego
    resetGame(true);
}

function cheatStreak() {
    winStreak = 37;
    localStorage.setItem('winStreak', winStreak);
    updateStreakDisplay();
    updateStreakSaverUI();
}

function selectRandomSong() {
    // 1. Determinar quÃ© historial usar y referencia a la variable global correspondiente
    let persistentHistory = currentMode === 'normal' ? playedSongsNormal : playedSongsArtist;
    const persistentHistoryKey = currentMode === 'normal' ? 'playedSongsNormal' : 'playedSongsArtist';

    // 2. Si availableSongs estÃ¡ vacÃ­o, llenarlo
    if (!availableSongs || availableSongs.length === 0) {
        let fullPool = [];
        if (currentMode === 'artist') {
            if (selectedArtist) {
                // MODO ARTISTA: Comportamiento de "Lista/Playlist" -> Cargar TODAS las canciones
                // No filtramos por historial aquÃƒÂƒÃ‚Â­ para permitir que las canciones vuelvan a sonar en la siguiente vuelta
                fullPool = bibliotecaArtist.filter(song => extractArtist(song.nombre) === selectedArtist);
                availableSongs = [...fullPool];
            } else {
                availableSongs = [];
            }
        } else if (currentMode === 'album') {
            if (selectedAlbum) {
                // MODO ÃƒÂƒÃ‚Â LBUM: Comportamiento de "Lista/Playlist" -> Cargar TODAS las canciones del ÃƒÂƒÂ¡lbum
                const albumInfo = albumsData.find(a => a.name === selectedAlbum);
                if (albumInfo && albumInfo.songs) {
                    availableSongs = [...albumInfo.songs];
                } else {
                    availableSongs = [];
                }
            } else {
                availableSongs = [];
            }
        } else {
            // MODO NORMAL: Comportamiento original
            fullPool = [...biblioteca];
            // Filtrar las que ya estÃƒÂƒÃ‚Â­n en el historial para dar variedad
            availableSongs = fullPool.filter(song => !persistentHistory.includes(song.nombre));

            // Si se agotan (ya se jugaron todas las posibles menos las del historial), reiniciamos
            if (availableSongs.length === 0 && fullPool.length > 0) {
                persistentHistory = []; // Reiniciar historial local
                // Actualizar variable global y storage
                playedSongsNormal = [];
                localStorage.setItem('playedSongsNormal', JSON.stringify([]));

                availableSongs = [...fullPool];
            }
        }
    }

    // Si no hay canciones disponibles (ej. modo artista sin artista seleccionado), salir
    if (availableSongs.length === 0) {
        currentSong = {};
        return;
    }

    // 3. Elegir canciÃƒÂƒÃ‚Â³n aleatoria
    let randomIndexInAvailable = Math.floor(Math.random() * availableSongs.length);
    let selectedSongCandidate = availableSongs[randomIndexInAvailable];

    // 4. MODO ARTISTA/ÃƒÂƒÃ‚Â LBUM: Evitar repeticiÃ³n en lapso corto (Constraint check)
    // Aunque availableSongs garantiza no repeticiÃ³n DENTRO de la ronda, 
    // al resetear la lista (nueva ronda) podrÃ­a tocar una que reciÃ©n sonÃ³.
    if (currentMode === 'artist' || currentMode === 'album') {
        const SHORT_LAPSE = 12; // Cantidad de canciones recientes a evitar
        const recentSongs = persistentHistory.slice(-SHORT_LAPSE);

        // Solo intentamos buscar otra si hay suficientes opciones
        if (availableSongs.length > 1) {
            let attempts = 0;
            // Mientras la candidata estÃ© en las recientes, buscamos otra
            while (recentSongs.includes(selectedSongCandidate.nombre) && attempts < 20) {
                randomIndexInAvailable = Math.floor(Math.random() * availableSongs.length);
                selectedSongCandidate = availableSongs[randomIndexInAvailable];
                attempts++;
            }
        }
    }

    // 5. Asignar canciÃƒÂƒÃ‚Â³n final
    currentSong = selectedSongCandidate;

    // 6. Sacarla de availableSongs (para esta sesiÃƒÂƒÃ‚Â³n/ronda)
    availableSongs.splice(randomIndexInAvailable, 1);

    // 7. Actualizar historial persistente
    persistentHistory.push(currentSong.nombre);

    // Limitar historial (mantener solo las ÃƒÂƒÃ‚Âºltimas 20 para referencia)
    if (persistentHistory.length > 20) {
        persistentHistory.shift();
    }

    // Guardar cambios en las variables globales y localStorage
    if (currentMode === 'normal') {
        playedSongsNormal = persistentHistory;
        localStorage.setItem('playedSongsNormal', JSON.stringify(playedSongsNormal));
    } else {
        playedSongsArtist = persistentHistory;
        localStorage.setItem('playedSongsArtist', JSON.stringify(playedSongsArtist));
    }
}

function clearGuessBoxes() {
    const boxes = document.querySelectorAll('.guess-box');
    boxes.forEach(box => {
        box.textContent = "";
        box.classList.remove('correct');
        box.classList.remove('incorrect');
        box.classList.remove('skipped');
        box.classList.remove('partial');
        // Limpiar tambiÃ©n la clase partial (amarillo)
    });
}

// NUEVO: Helpers para persistencia visual
function getGuessStates() {
    const boxes = document.querySelectorAll('.guess-box');
    return Array.from(boxes).map(box => ({
        text: box.textContent,
        classes: [...box.classList].filter(c => c !== 'guess-box')
    }));
}

function restoreGuessStates(guesses) {
    const boxes = document.querySelectorAll('.guess-box');
    guesses.forEach((guess, i) => {
        if (boxes[i]) {
            boxes[i].textContent = guess.text;
            guess.classes.forEach(c => boxes[i].classList.add(c));
        }
    });
}

// =====================================================
// AUDIO PLAYER - Core Functions (Mobile-Optimized v2.0)
// =====================================================

function pauseAudioInternal(resetToIdle = true) {
    // 1. Pause the audio
    audioPlayer.pause();

    // 2. Stop animation loop
    stopAnimationLoop();

    // 3. Update state
    snippetState = resetToIdle ? 'idle' : 'paused';

    // 4. Update UI
    updatePlayIcon(false);
}



/**
 * Updates the play button icon
 */
function updatePlayIcon(playing) {
    playButton.innerHTML = playing ? iconPause : iconPlay;
    playButton.setAttribute('aria-label', playing ? 'pausar fragmento' : 'escuchar fragmento');
}

/**
 * Finishes snippet playback - called when target time is reached
 */
function finishSnippet() {
    pauseAudioInternal(true);
}

// ==================== ANIMATION LOOP (simplificado) ====================

function animationLoop() {
    if (snippetState !== 'playing' || isGameOver) {
        animationFrameId = null;
        return;
    }

    const currentTime = audioPlayer.currentTime;

    if (currentTime >= snippetTargetTime && !hasGuessedCorrectly) {
        finishSnippet();
        return;
    }

    // Barra de progreso
    const durations = getDurations();
    const visualDuration = durations[guessCount] || getTotalGameDuration();
    const percentage = (currentTime / visualDuration) * getPercentage(visualDuration);
    if (progressBarFill) progressBarFill.style.width = Math.min(percentage, 100) + '%';

    animationFrameId = requestAnimationFrame(animationLoop);
}

function startAnimationLoop() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(animationLoop);
}

function stopAnimationLoop() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
}

function playSnippet() {
    if (hasGuessedCorrectly || playButton.hasAttribute('disabled')) return;

    if (snippetState === 'playing') {
        pauseAudioInternal(false);
        return;
    }

    // Reiniciar al principio si ya pasó el límite
    if (audioPlayer.currentTime >= snippetTargetTime - 0.05) {
        audioPlayer.currentTime = 0;
    }

    audioPlayer.play()
        .then(() => {
            snippetState = 'playing';
            updatePlayIcon(true);
            startAnimationLoop();
        })
        .catch(e => {
            console.warn('Autoplay blocked:', e);
            updatePlayIcon(false);
        });
}



// funciÃ³n de game over modificada

// SMART RANDOM LOGIC
const messageHistory = { win: [], lose: [] };

function getNonRepeatingMessage(messages, type) {
    const history = messageHistory[type];
    // Filter out messages currently in history (last 3 shown)
    let available = messages.filter(msg => !history.includes(msg));

    // Fallback: If all messages are in history (shouldn't happen with large pools, but for safety)
    // or if available is too small, just pick from full pool avoiding the VERY last one if possible.
    if (available.length === 0) {
        const lastOne = history[history.length - 1];
        available = messages.filter(msg => msg !== lastOne);
    }

    // Final fallback if still empty (e.g. pool size 1)
    if (available.length === 0) available = messages;

    const randomMsg = available[Math.floor(Math.random() * available.length)];

    // Update history
    history.push(randomMsg);
    if (history.length > 3) history.shift(); // Keep last 3

    return randomMsg;
}
function showGameOver(won, isDuplicate = false) {
    isGameOver = true;

    // LIMPIAR PERSISTENCIA DEL START BYTE
    if (currentSong && currentSong.archivo) {
        const cleanName = getCleanFileName(currentSong.archivo);
        localStorage.removeItem(`ul_start_${cleanName}`);
    }



    if (won) {
        const winMessages = ["GANASTE GG", "SOS BUENO", "CHAD HUMANO", "QUE PIBE TAN UNDER", "ZARPADO EN CHETO", "boeee...", "estoy orgulloso hijo", "CLAP CLAP", "ESTE SI QUE SABE", "watejel"];
        // const randomMsg = winMessages[Math.floor(Math.random() * winMessages.length)];
        const randomMsg = getNonRepeatingMessage(winMessages, 'win');
        gameResult.textContent = randomMsg;
        gameOverContent.classList.remove('win', 'lose'); // limpia ambas
        gameOverContent.classList.add('win');
        answerLabel.textContent = "la cancion era"; // etiqueta simple

        if (currentMode === 'normal') {
            winStreak++;
            localStorage.setItem('winStreak', winStreak);
            // Recompensas de Streak Save (solo en normal)
            if (winStreak === 10 || winStreak === 20 || winStreak === 40 || winStreak === 100) {
                streaksavers++;
                localStorage.setItem('streaksavers', streaksavers);
            }
        } else {
            // ARTIST / ALBUM MODE
            if (!isDuplicate) {
                artistStreak++;
                localStorage.setItem('artistStreak', artistStreak);
            }
        }

        updateStreakDisplay();
        updateStreakSaverUI();

        // Confeti sutil y breve
        confetti({
            particleCount: 70,
            spread: 70,
            origin: { y: 0.6 },
            ticks: 200, // DuraciÃƒÂƒÃ‚Â³n breve
            gravity: 1.2,
            scalar: 0.9
        });

    } else {
        playSound('gameover');

        // Mensajes aleatorios de derrota
        const loseMessages = ["PERDISTE", "MAL AHI", "NECESITÃS MEJORAR", "DEDICATE AL PADEL", "NAAH :(", "SAJ", "FAKE FAN", "PETÃ“N HISTORICO", "TE TENIA FE", "mal aji broder", "eeee?", "xdd"];
        // const randomMsg = loseMessages[Math.floor(Math.random() * loseMessages.length)];
        const randomMsg = getNonRepeatingMessage(loseMessages, 'lose');
        gameResult.textContent = randomMsg;

        gameOverContent.classList.remove('win', 'lose'); // ÃƒÂ‚Â¡limpia ambas!
        gameOverContent.classList.add('lose');
        answerLabel.textContent = "la cancion era"; // etiqueta simple

        // LÃƒÂƒÃ‚Â³gica de salva rachas al perder
        if (currentMode === 'normal') {
            // Ocultar UI de share por defecto al perder (se muestra solo si es fatal)
            const shareCont = document.getElementById('share-container');
            if (shareCont) shareCont.style.display = 'none';
            const mobBtn = document.getElementById('mobile-share-btn');
            if (mobBtn) mobBtn.style.display = 'none';

            if (winStreak >= minstreak && streaksavers > 0) {
                streaksavers--;
                localStorage.setItem('streaksavers', streaksavers);
                // Vida consumida, racha salvada.
            } else {
                // Si no hay vidas o no llegamos al minstreak, reset fatal.

                // === SHARE CARD TRIGGER (FATAL LOSS ONLY) ===
                // Capturamos el streak antes de resetearlo
                if (winStreak > 15) {
                    try {
                        generateShareCard(currentSong.nombre, winStreak);
                        // Mostrar UI segÃƒÂƒÃ‚Âºn dispositivo
                        if (window.innerWidth > 768) {
                            if (shareCont) shareCont.style.display = 'flex';
                        } else {
                            if (mobBtn) mobBtn.style.display = 'block';
                        }
                    } catch (err) {
                        console.error("Error generating share card:", err);
                    }
                }

                winStreak = 0;
                localStorage.setItem('winStreak', winStreak);
            }
        } else {
            // Artist o Album mode: reset artistStreak
            artistStreak = 0;
            localStorage.setItem('artistStreak', artistStreak);

            // RESET UNIQUE SONGS TRACKING
            wonSongsInStreak.clear();
            saveModeState(currentMode); // Save cleared state
        }

        updateStreakDisplay();
        updateStreakSaverUI();
    }

    correctAnswerEl.textContent = (currentSong.nombre || "");
    gameOverMessage.classList.add('show');

    // Randomizar texto del botÃƒÂƒÃ‚Â³n "una ma"
    const playAgainBtn = document.querySelector('.play-again-button');
    if (playAgainBtn) {
        const btnMessages = ["una ma", "otra?", "la seguimos?", "siguiente", "continuar"];
        playAgainBtn.textContent = btnMessages[Math.floor(Math.random() * btnMessages.length)];
    }

    document.getElementById('search-container').classList.add('disabled');
    playButton.setAttribute('disabled', '');
    skipButton.disabled = true;
}

function handleGuessFromSelection(selectedSongName) {
    playSound('click');
    const durations = getDurations();
    if (hasGuessedCorrectly || guessCount >= durations.length) return;

    const correctAnswer = (currentSong.nombre || "").trim();
    const guessBox = document.querySelectorAll('.guess-box')[guessCount];
    songsList.classList.remove('show');

    guessBox.classList.remove('incorrect', 'skipped');

    const isCorrect = selectedSongName.toLowerCase() === correctAnswer.toLowerCase();

    if (isCorrect) {
        guessBox.textContent = currentSong.nombre;
        guessBox.classList.add('correct');
        hasGuessedCorrectly = true;

        // CHECK DUPLICATE WIN (Artist/Album Modes)
        const songName = currentSong.nombre;
        let isDuplicate = false;

        if (currentMode === 'artist' || currentMode === 'album') {
            if (wonSongsInStreak.has(songName)) {
                isDuplicate = true;
                showStreakWarning();
                // NO STREAK INCREMENT
            } else {
                wonSongsInStreak.add(songName);
            }
            saveModeState(currentMode); // Persist updated set
        }

        // CAMBIO: Deshabilitar inmediatamente y aÃƒÂƒÃ‚Â±adir el retraso de 1.5s
        document.getElementById('search-container').classList.add('disabled');
        playButton.setAttribute('disabled', '');
        skipButton.disabled = true;

        setTimeout(() => {
            showGameOver(true, isDuplicate); // Pass isDuplicate flag
        }, 1500); // Retraso de 1.5 segundos

    } else {
        // si falla, se pone el nombre seleccionado en la casilla
        guessBox.textContent = selectedSongName || "intento fallido";

        // LÃƒÂƒÃ‚Â³gica de coincidencia parcial (solo modo normal)
        let isPartial = false;
        if (currentMode === 'normal') {
            // Obtener string completo de artistas (antes del guion)
            const guessedArtistStr = extractArtistForGuess(selectedSongName);
            const correctArtistStr = extractArtistForGuess(correctAnswer);

            if (guessedArtistStr && correctArtistStr) {
                // Separar por comas y limpiar espacios
                const guessedArtists = guessedArtistStr.split(',').map(a => a.trim().toLowerCase());
                const correctArtists = correctArtistStr.split(',').map(a => a.trim().toLowerCase());

                // Verificar si hay ALGUNA coincidencia
                // Si algÃƒÂƒÃ‚Âºn artista de la canciÃƒÂƒÃ‚Â³n adivinada estÃƒÂƒÂ¡ en la lista de artistas de la correcta
                const match = guessedArtists.some(g => correctArtists.includes(g));
                if (match) {
                    isPartial = true;
                }
            }
        }

        if (isPartial) {
            guessBox.classList.add('partial'); // Amarillo
        } else {
            guessBox.classList.add('incorrect'); // Rojo
        }

        guessCount++;
        if (guessCount < durations.length) {
            updateTimeMarker(guessCount);
            loadAudioLevel(currentSong.archivo, guessCount + 1);
            finishSnippet();
        } else {
            showGameOver(false);
        }
    }
    document.getElementById('search-input').value = "";
    saveModeState(currentMode); // Guardar estado tras intento
}


async function handleSkip() {
    const durations = getDurations();
    if (hasGuessedCorrectly || guessCount >= durations.length) return;

    // Si estÃƒÂƒÂ¡ en modo Mandale, enviar intento
    if (isSubmitMode) {
        // No reproducir sonido aquÃƒÂƒÃ‚Â­, ya lo hace handleGuessFromSelection
        const val = searchInput.value.trim();
        if (val) {
            handleGuessFromSelection(val);
            disableSubmitMode(); // Resetear botÃƒÂƒÃ‚Â³n tras intento
        }
        return;
    }

    // SONIDO: Solo reproducir click si NO es el ÃƒÂƒÃ‚Âºltimo skip (para que no se solape con game over)
    if (guessCount < durations.length - 1) {
        playSound('click');
    }

    const guessBox = document.querySelectorAll('.guess-box')[guessCount];

    // >>> INICIO MODIFICACIÃƒÂƒÃ¢Â€ÂœN JS PARA SKIP <<<
    guessBox.textContent = "Skipped";
    guessBox.classList.remove('incorrect', 'correct'); // asegurar que no tiene rojo ni verde
    guessBox.classList.add('skipped'); // nuevo: usa el gris oscuro
    // >>> FIN MODIFICACIÃƒÂƒÃ¢Â€ÂœN JS PARA SKIP <<<

    guessCount++;
    if (guessCount < durations.length) {
        updateTimeMarker(guessCount);
        
        // El audio se pausa durante la carga del nuevo fragmento, así que actualizamos el icono visualmente a "play" (pausado)
        updatePlayIcon(false);
        
        await loadAudioLevel(currentSong.archivo, guessCount + 1);

        // FIX: Actualizar snippetTargetTime al nuevo lÃƒÂƒÃ‚Â­mite del segmento desbloqueado
        // para que el audio no se pause al llegar al lÃƒÂƒÃ‚Â­mite del segmento anterior
        snippetTargetTime = durations[guessCount];
    } else {
        showGameOver(false);
    }
    document.getElementById('search-input').value = "";
    songsList.classList.remove('show');
    saveModeState(currentMode); // Guardar estado tras skip
}

// volumen
if (volumeSlider) {
    // CORREGIDO: parseFloat
    audioPlayer.volume = parseFloat(volumeSlider.value);
    volumeSlider.addEventListener("input", e => {
        const vol = parseFloat(e.target.value);
        audioPlayer.volume = vol;
        localStorage.setItem('volume', vol);
    });
}

// fix visual: sincroniza marcador visual estatico (la flecha)
function updateTimeMarker(index) {
    const durations = getDurations();
    // CORREGIDO: Math.min
    const safeIndex = Math.min(index, durations.length - 1);
    const targetTime = durations[safeIndex];
    const percentage = getPercentage(targetTime);

    // Ajuste visual para que la flecha no parezca adelantada en 0.1s
    // Si es el primer segmento (0.1s), le restamos un pelÃƒÂƒÃ‚Â­n
    let visualPercentage = percentage;
    if (safeIndex === 0) visualPercentage -= 0.5; // Ajuste fino

    timerTextEl.style.left = visualPercentage + '%';
    timerTextEl.textContent = formatSeconds(targetTime);

    const prevDuration = safeIndex > 0 ? durations[safeIndex - 1] : 0;

    const startPercentage = getPercentage(prevDuration);
    // Don't update progress bar fill on skip, only the arrow.
    // progressBarFill.style.width = startPercentage + '%';
}

// OLD TIMER-BASED FUNCTIONS REMOVED:
// startTimeMarkerUpdate and stopTimeMarkerUpdate are replaced by
// handleSnippetTimeUpdate and updateProgressBarVisuals using timeupdate events

// -----------------------------------------------------
// buscador y eventos
// NUEVO: Variable para controlar el modo del botÃƒÂƒÃ‚Â³n Skip
let isSubmitMode = false;

function enableSubmitMode() {
    isSubmitMode = true;
    skipButton.textContent = "mandale";
    skipButton.classList.add('submit-mode');
}

function disableSubmitMode() {
    isSubmitMode = false;
    skipButton.textContent = "Skip";
    skipButton.classList.remove('submit-mode');
}

searchInput.addEventListener('input', function () {
    // Si el usuario escribe, desactivar modo Mandale
    disableSubmitMode();

    // no eliminar funcion de tolowercase aqui, es necesaria para la busqueda
    const query = (this.value || '').toLowerCase();
    songsList.innerHTML = '';
    if (query.length < 2) { songsList.classList.remove('show'); return; }

    let pool = currentMode === 'artist' ? bibliotecaArtist : biblioteca;

    if (currentMode === 'artist' && selectedArtist) {
        pool = pool.filter(s => extractArtist(s.nombre) === selectedArtist);
    } else if (currentMode === 'album' && selectedAlbum) {
        // FILTER BY ALBUM
        const albumData = albumsData.find(a => a.name === selectedAlbum);
        if (albumData) {
            pool = albumData.songs;
        }
    }

    // MEJORADO: BÃƒÂƒÃ‚Âºsqueda por palabras clave independientes (fuzzy-like)
    const queryTerms = query.split(/\s+/); // Separar por espacios
    const filtered = pool.filter(s => {
        const songName = s.nombre.toLowerCase();
        // Verificar si TODAS las palabras de la bÃƒÂƒÃ‚Âºsqueda estÃƒÂƒÂ¡n en el nombre
        return queryTerms.every(term => songName.includes(term));
    });
    if (filtered.length > 0) {
        // CORREGIDO: forEach, appendChild, slice
        filtered.forEach(song => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.textContent = song.nombre;

            // EVENTO IMPORTANTE: AHORA LLAMA A LA NUEVA FUNCIÃƒÂƒÃ¢Â€ÂœN DE ADIVINANZA
            div.addEventListener('click', () => {
                // primero se rellena el input con el valor seleccionado
                searchInput.value = song.nombre;
                songsList.classList.remove('show');

                // CAMBIO: En lugar de adivinar directo, activar modo Mandale
                enableSubmitMode();
            });
            songsList.appendChild(div);
        });
        songsList.classList.add('show');
    } else songsList.classList.remove('show');
});

// NEW: Re-show suggestions when clicking/focusing on search input with existing text
searchInput.addEventListener('focus', function () {
    const query = (this.value || '').toLowerCase();
    if (query.length >= 2) {
        // Trigger the same logic as input event
        let pool = currentMode === 'artist' ? bibliotecaArtist : biblioteca;

        if (currentMode === 'artist' && selectedArtist) {
            pool = pool.filter(s => extractArtist(s.nombre) === selectedArtist);
        } else if (currentMode === 'album' && selectedAlbum) {
            const albumData = albumsData.find(a => a.name === selectedAlbum);
            if (albumData) pool = albumData.songs;
        }

        const queryTerms = query.split(/\s+/);
        const filtered = pool.filter(s => {
            const songName = s.nombre.toLowerCase();
            return queryTerms.every(term => songName.includes(term));
        });

        songsList.innerHTML = '';
        if (filtered.length > 0) {
            filtered.forEach(song => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.textContent = song.nombre;
                div.addEventListener('click', () => {
                    searchInput.value = song.nombre;
                    songsList.classList.remove('show');
                    enableSubmitMode();
                });
                songsList.appendChild(div);
            });
            songsList.classList.add('show');
        }
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-container') && !event.target.closest('#songs-list')) {
        songsList.classList.remove('show');
    }
});

// CAMBIO IMPORTANTE: ESTE LISTENER FUE MODIFICADO
searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        // no hace nada, bloquea el enter para forzar la selecciÃƒÂƒÃ‚Â³n de la lista
    }
});

// -----------------------------------------------------
// init
window.addEventListener('load', () => {
    renderGuessBoxes(); // Inicializar cajas
    renderProgressSegments();
    updateTimeMarker(0);

    // Restore volume
    const savedVol = localStorage.getItem('volume');
    if (savedVol !== null && volumeSlider) {
        volumeSlider.value = savedVol;
        audioPlayer.volume = parseFloat(savedVol);
    } else if (volumeSlider) {
        audioPlayer.volume = parseFloat(volumeSlider.value);
    }
    // PERSISTENCIA: Cargar estado guardado
    loadFromLocalStorage();

    // Restaurar UI según el modo cargado
    if (currentMode === 'artist') {
        modeNormalBtn.classList.remove('active');
        modeArtistBtn.classList.add('active');
        artistSection.classList.add('show');
        populateArtists();
        restoreModeState('artist');
    } else if (currentMode === 'album') {
        modeNormalBtn.classList.remove('active');
        modeAlbumBtn.classList.add('active');
        albumSection.classList.add('show');
        populateAlbums();
        restoreModeState('album');
    } else {
        restoreModeState('normal');
    }

    // Cargar racha inicial (si no se cargÃƒÂƒÃ‚Â³ ya en restoreModeState -> resetGame)
    winStreak = parseInt(localStorage.getItem('winStreak')) || 0;
    updateStreakDisplay();
    updateStreakSaverUI();



    // Hide lives UI if in album mode
    const streakSaverUI = document.getElementById('streak-saver-ui');
    if (currentMode === 'album' && streakSaverUI) {
        streakSaverUI.style.display = 'none';
    }
});




// LÃƒÂƒÃ¢Â€ÂœGICA MODAL BUGS
function openBugsModal() {
    const modal = document.getElementById('bugs-modal');
    if (modal) {
        // Asegurar display flex antes de la animaciÃƒÂƒÃ‚Â³n (aunque ya deberÃƒÂƒÃ‚Â­a estar por CSS)
        // pero para esta implementaciÃƒÂƒÃ‚Â³n basada en CSS opacity, flex estÃƒÂƒÂ¡ siempre.
        // Solo necesitamos togglear la clase.
        modal.classList.add('show');
    }
}

function closeBugsModal() {
    const modal = document.getElementById('bugs-modal');
    if (modal) modal.classList.remove('show');
}

// Cerrar modal bugs al hacer click fuera
window.addEventListener('click', (e) => {
    const modal = document.getElementById('bugs-modal');
    if (e.target === modal) closeBugsModal();
});

// LÃƒÂƒÃ¢Â€ÂœGICA MODAL RECOMENDAR
function openRecommendModal() {
    playSound('click');
    const modal = document.getElementById('recommend-modal');
    if (modal) modal.classList.add('show');
}

function closeRecommendModal() {
    playSound('click');
    const modal = document.getElementById('recommend-modal');
    if (modal) modal.classList.remove('show');
}

// Cerrar modal recomendar al hacer click fuera
window.addEventListener('click', (e) => {
    const modal = document.getElementById('recommend-modal');
    if (e.target === modal) closeRecommendModal();
});

// LÃƒÂƒÃ¢Â€ÂœGICA MODAL INFO VIDAS
function openLifeModal() {
    playSound('click');
    const modal = document.getElementById('life-info-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeLifeModal() {
    playSound('click');
    const modal = document.getElementById('life-info-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Cerrar modal al hacer click fuera del contenido
window.addEventListener('click', (e) => {
    const modal = document.getElementById('life-info-modal');
    if (e.target === modal) {
        closeLifeModal();
    }
});

window.addEventListener('beforeunload', () => {
    pauseAudioInternal();
});



// ========================================
// SCALING & MODE SWITCH LOGIC
// ========================================

function ajustarEscala() {
    // DISABLE ON MOBILE/TABLET
    if (window.innerWidth < 850) {
        const ui = document.getElementById("ui-root");
        if (ui) {
            ui.style.transform = '';
            ui.style.position = '';
            ui.style.left = '';
            ui.style.top = '';
        }
        return;
    }

    const baseAncho = 900;
    const baseAlto = 950;

    const escala = Math.min(
        window.innerWidth / baseAncho,
        window.innerHeight / baseAlto
    );

    // aplicar solo al contenedor interno
    const ui = document.getElementById("ui-root");
    if (ui) {
        ui.style.transform = `scale(${escala})`;
        // centrarlo
        ui.style.position = "absolute";
        ui.style.left = `50%`;
        ui.style.top = `0`;
        ui.style.transformOrigin = "top center";
        ui.style.transform = `translateX(-50%) scale(${escala})`;
    }
}



// === NEW LOGIC: Volume & Mobile Menu ===
// Volume Control
const volSlider = document.getElementById('volume-slider');
if (volSlider) {
    // Init logic: audioPlayer is already global
    volSlider.value = audioPlayer.volume;
    volSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });

    // Update slider if volume changes elsewhere (e.g. from existing slider if any)
    audioPlayer.addEventListener('volumechange', () => {
        volSlider.value = audioPlayer.volume;
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const d = document.getElementById('mobile-menu-dropdown');
    if (d) d.classList.toggle('show');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menuContainer = document.getElementById('mobile-menu-container');
    if (menuContainer && !menuContainer.contains(e.target)) {
        const d = document.getElementById('mobile-menu-dropdown');
        if (d) d.classList.remove('show');
    }
});

// === SHARE CARD LOGIC ===
let lastGeneratedDataUrl = null;
let lastShareStreak = 0;

function generateShareCard(songName, streak) {
    lastShareStreak = streak;
    const canvas = document.getElementById('share-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Helper private function to save/preview
    const updatePreview = () => {
        try {
            lastGeneratedDataUrl = canvas.toDataURL('image/png');
            const preview = document.getElementById('share-preview');
            if (preview) preview.src = lastGeneratedDataUrl;
        } catch (e) {
            console.error("Error exporting to DataURL (Security/Tainted):", e);
            // Si falla (ej. canvas sucio), nullificamos para que no se intente compartir basura
            lastGeneratedDataUrl = null;
        }
    };

    // 1. Background
    ctx.fillStyle = '#1e1e1e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Logo/Title
    ctx.font = 'bold 50px "PoppinsFont", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText('UnderLess', canvas.width / 2, 60);

    // 4. "Perdiste con:" (Move UP slightly)
    ctx.font = '30px "OtherTextFont", sans-serif';
    ctx.fillStyle = '#888888';
    ctx.fillText('Perdiste con:', canvas.width / 2, 290);

    // 5. Song Name (Move UP)
    ctx.font = 'bold 36px "OtherTextFont", sans-serif';
    ctx.fillStyle = '#ffffff';
    wrapText(ctx, songName, canvas.width / 2, 340, 500, 45);

    // 6. Streak (Move UP significantly for centering)
    ctx.font = 'bold 100px "PoppinsFont", sans-serif';

    // LOGICA DE COLOR IDENTICA A LA DEL JUEGO
    let color = '#55b725'; // Default
    if (streak <= 5) {
        const progress = (streak - 1) / 4;
        color = lerpColor("#55b725", "#7db800", progress);
    } else if (streak <= 10) {
        const progress = (streak - 5) / 5;
        color = lerpColor("#7db800", "#ffd000", progress);
    } else if (streak <= 15) {
        const progress = (streak - 10) / 5;
        color = lerpColor("#ffd000", "#ff8800", progress);
    } else if (streak <= 20) {
        const progress = (streak - 15) / 5;
        color = lerpColor("#ff8800", "#ff3300", progress);
    } else if (streak <= 25) {
        const progress = (streak - 20) / 5;
        color = lerpColor("#ff3300", "#990000", progress);
    } else if (streak <= 30) {
        const progress = (streak - 25) / 5;
        color = lerpColor("#990000", "#b14aed", progress);
    } else if (streak <= 35) {
        const progress = (streak - 30) / 5;
        color = lerpColor("#b14aed", "#8a2be2", progress);
    } else if (streak <= 99) {
        color = '#8a2be2'; // Violeta intenso
    } else {
        color = '#00d4ff'; // Cyan
    }

    ctx.fillStyle = color;
    ctx.fillText(`RACHA: ${streak}`, canvas.width / 2, 480);

    // 7. Footer
    ctx.fillStyle = '#555555';
    ctx.font = '24px sans-serif';
    ctx.fillText('invalame.github.io/UnderLess', canvas.width / 2, 700);

    // 3. Image (Peepo) - skip if local file to avoid tainted canvas
    if (window.location.protocol === 'file:') {
        console.warn("Working locally: Skipping image draw to avoid Tainted Canvas.");
        updatePreview();
        return;
    }

    const sourceImg = document.getElementById('emote-7tv');
    if (sourceImg && sourceImg.src) {
        const img = new Image();
        img.crossOrigin = "Anonymous"; // CRITICAL FOR CANVAS EXPORT
        img.onload = () => {
            const imgW = 200;
            const imgH = imgW * (img.naturalHeight / img.naturalWidth) || 200;
            ctx.drawImage(img, (canvas.width - imgW) / 2, 80, imgW, imgH);
            updatePreview(); // Update preview ONLY after image is drawn
        };
        img.onerror = () => {
            console.warn("Failed to load share image (CORS/Network). Generating text-only card.");
            updatePreview(); // Update even if image fails
        };
        img.src = sourceImg.src;
    } else {
        // No image source, just update
        updatePreview();
    }
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

// Button Listeners
const btnDown = document.getElementById('btn-download-img');
if (btnDown) {
    btnDown.onclick = () => {
        if (!lastGeneratedDataUrl) return;
        const a = document.createElement('a');
        a.href = lastGeneratedDataUrl;
        a.download = `UnderLess-Racha-${lastShareStreak}.png`;
        a.click();
    };
}



function triggerMobileShare() {
    const shareCont = document.getElementById('share-container');
    if (shareCont) {
        shareCont.style.display = 'flex';
    }
}

function closeShareContainer() {
    const shareCont = document.getElementById('share-container');
    if (shareCont) {
        shareCont.style.display = 'none';
    }
}

// Custom Smooth Slow Scroll Implementation
function applySlowScroll(element) {
    if (!element) return;

    let targetScroll = 0;
    let isAnimating = false;
    let animationFrame;

    element.addEventListener('wheel', (e) => {
        e.preventDefault();

        // If not animating, sync target with current position to avoid jumps
        if (!isAnimating) {
            targetScroll = element.scrollTop;
        }

        // Factor 0.4: Slower than default (approx 40% speed)
        const scrollSpeed = 0.4;
        targetScroll += e.deltaY * scrollSpeed;

        // Clamp target
        const maxScroll = element.scrollHeight - element.clientHeight;
        targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

        if (!isAnimating) {
            isAnimating = true;
            animateScroll();
        }
    }, { passive: false });

    function animateScroll() {
        // Lerp factor 0.08: Very smooth/soft (lower is smoother)
        const smoothFactor = 0.08;

        const currentScroll = element.scrollTop;
        const diff = targetScroll - currentScroll;

        if (Math.abs(diff) < 0.5) {
            element.scrollTop = targetScroll;
            isAnimating = false;
            return;
        }

        // Interpolate
        element.scrollTop = currentScroll + (diff * smoothFactor);
        animationFrame = requestAnimationFrame(animateScroll);
    }
}

window.addEventListener('load', () => {
    applySlowScroll(document.getElementById('songs-list'));
    applySlowScroll(document.getElementById('artist-list'));
    applySlowScroll(document.getElementById('album-list'));
    applySlowScroll(document.getElementById('uoh-artist-list'));
});

window.addEventListener("resize", ajustarEscala);
window.addEventListener("load", ajustarEscala);

// FIX: Force loader on Play Button when switching modes without selection
// This ensures visual feedback (spinner) persists until the user picks a song
['mode-artist', 'mode-album', 'mode-normal'].forEach(modeId => {
    const btn = document.getElementById(modeId);
    if (btn) {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                const playBtn = document.getElementById('play-button');
                // Check conditions to force loader
                const needsLoader = (currentMode === 'artist' && !selectedArtist) ||
                    (currentMode === 'album' && !selectedAlbum);

                if (needsLoader && playBtn) {
                    playBtn.innerHTML = '<div class="loader"></div>';
                }
            }, 50); // Small delay to run after main switch logic
        });
    }
});
