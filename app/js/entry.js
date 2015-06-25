// // Do this first
// import hello from './helpers/hello'

// const el = document.createElement('p')
// el.innerHTML = hello('DPC', 'swedish')

// document.body.appendChild(el)

// We'll get to this later...
import React from 'react'
import PhotoApp from './components/photo_app'

React.render(<PhotoApp />, document.querySelector('.app-shell'))
