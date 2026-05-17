;(function () {
  function show(el, on) {
    if (!el) return
    el.hidden = !on
    el.style.display = on ? '' : 'none'
  }

  function applyAll(cornerSrc, profilePath, displayName, discriminator) {
    document.querySelectorAll('[data-ul-sidebar-profile-wrap]').forEach(function (wrap) {
      var img = wrap.querySelector('[data-ul-sidebar-profile-img]')
      if (!img) return
      
      // Inject Name
      var nameEl = wrap.querySelector('[data-ul-sidebar-profile-name]')
      if (nameEl) {
        nameEl.textContent = displayName
      }
      
      img.src = cornerSrc
      img.alt = 'Perfil'
      
      var profileLink = wrap.querySelector('[data-ul-sidebar-profile-link]')
      if (profileLink) profileLink.href = profilePath
      
      show(wrap, true)
      
      // Toggle dropdown logic
      var toggleBtn = wrap.querySelector('[data-ul-sidebar-profile-toggle]')
      var menu = wrap.querySelector('[data-ul-sidebar-profile-menu]')
      if (toggleBtn && menu) {
        toggleBtn.onclick = function(e) {
          e.stopPropagation()
          menu.classList.toggle('show')
        }
        document.addEventListener('click', function(e) {
          if (!wrap.contains(e.target)) menu.classList.remove('show')
        })
      }
    })
  }

  function hideAll() {
    document.querySelectorAll('[data-ul-sidebar-profile-wrap]').forEach(function (wrap) {
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
      applyAll(j.cornerSrc, j.profilePath, j.display_name, j.discriminator)
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
