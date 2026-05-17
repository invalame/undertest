;(function () {
  function show(el, on) {
    if (!el) return
    el.hidden = !on
    el.style.display = on ? '' : 'none'
  }

  function applyAll(cornerSrc, profilePath, displayName) {
    document.querySelectorAll('[data-ul-profile-corner-wrap]').forEach(function (wrap) {
      var img = wrap.querySelector('[data-ul-profile-corner-img]')
      var nameEl = wrap.querySelector('[data-ul-profile-corner-name]')
      var link = wrap.querySelector('[data-ul-profile-corner-link]')
      
      if (img) {
        img.src = cornerSrc
        img.alt = 'Perfil'
      }
      if (nameEl) {
        nameEl.textContent = displayName
      }
      if (link) {
        link.href = profilePath
      }
      show(wrap, true)
    })
  }

  function hideAll() {
    document.querySelectorAll('[data-ul-profile-corner-wrap]').forEach(function (wrap) {
      show(wrap, false)
    })
  }

  async function init() {
    try {
      var r = await fetch('/api/me', { credentials: 'include' })
      var j = await r.json()
      if (!j || !j.ok || !j.cornerSrc || !j.profilePath) {
        hideAll()
        return
      }
      applyAll(j.cornerSrc, j.profilePath, j.display_name)
    } catch (e) {
      hideAll()
    }
  }

  window.underlessGoMyProfile = function () {
    fetch('/api/me', { credentials: 'include' })
      .then(function (r) {
        return r.json()
      })
      .then(function (j) {
        if (j && j.ok && j.profilePath) window.location.href = j.profilePath
        else window.location.href = '/'
      })
      .catch(function () {
        window.location.href = '/'
      })
  }

  window.toggleSidebarProfileMenu = function () {
    var menus = document.querySelectorAll('#sidebar-profile-menu');
    menus.forEach(function(menu) {
      if (menu.style.display === 'none') {
        menu.style.display = 'flex';
      } else {
        menu.style.display = 'none';
      }
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('[data-ul-profile-corner-wrap]')) {
      var menus = document.querySelectorAll('#sidebar-profile-menu');
      menus.forEach(function(menu) {
        menu.style.display = 'none';
      });
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
