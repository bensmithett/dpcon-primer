// Non-Webpack bundle
/****************************************/
// So you couldn't get Webpack running on your laptop :(
// Don't worry! You can still complete the tutorial!

// You just need to "fake" writing your JS in different files
// & do things the old-fashioned way: use global variables

// You can still write ES6 & JSX! This file will be compiled by
// Babel in the browser.
/****************************************/

// components/photo_app.js
/****************************************/
// (function () {
//   const PhotoApp = React.createClass({
//     render () {
//       return (
//         <div>
//           This is my photo app
//         </div>
//       )
//     }
//   })

//   window.PhotoApp = PhotoApp
// }());


// helpers/hello.js
/****************************************/
(function () {
  const hellos = {
    'australian': 'G\'day',
    'dutch': 'Hallo',
    'french': 'Bonjour',
    'swedish': 'Hallå'
  }

  function hello (name, language) {
    return `${hellos[language]} ${name}!`
  }

  // Instead of module.exports, do it the old-fashioned way & export a global variable.
  window.hello = hello
}());

// entry.js
// This is the function that actually kicks everything off!
/****************************************/
(function () {
  const el = document.createElement('p')
  el.innerHTML = hello('DPC', 'australian')

  document.body.appendChild(el)
}());
