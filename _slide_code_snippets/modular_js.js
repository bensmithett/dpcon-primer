// my_app.js
var $ = require('jquery')
var fancyModal = require('fancy_modal')

var init = function () {
  $(".content").slideDown()
  fancyModal('Hello!')
}

module.exports = {init: init}
