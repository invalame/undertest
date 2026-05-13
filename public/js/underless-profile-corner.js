;(function () {
  function show(el, on) {
    if (!el) return
    el.hidden = !on
    el.style.display = on ? '' : 'none'
  }

  function applyAll(cornerSrc, profilePath) {
    document.querySelectorAll('[data-ul-profile-corner-wrap]').forEach(function (wrap) {
      var link = wrap.querySelector('[data-ul-profile-corner-link]')
      var img = wrap.querySelector('[data-ul-profile-corner-img]')
      if (!link || !img) return
      img.src = cornerSrc
      img.alt = 'Perfil'
      link.href = profilePath
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
      applyAll(j.cornerSrc, j.profilePath)
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
