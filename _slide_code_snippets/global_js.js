// jquery.js
window.$ = function () { /* ... */ }

// fancy_modal.js
window.fancyModal = function () { /* ... */ }

// my_app.js
window.MyApp = {
  init: function () {
    $('.content').slideDown()
    fancyModal('Hello!')
  }
}
