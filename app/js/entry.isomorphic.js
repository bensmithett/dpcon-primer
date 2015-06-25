import React from 'react'
import PhotoApp from './components/photo_app'

// Client render (optional):
if (typeof document !== 'undefined') {
  React.render(<PhotoApp />, document.querySelector('.app-shell'))
}

// Exported static site renderer:
module.exports = function render(locals, callback) {
  var html = React.renderToString(<PhotoApp />)
  callback(null, locals.template(html))
}
