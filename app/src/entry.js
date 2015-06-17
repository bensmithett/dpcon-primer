import hello from './components/hello'

const el = document.createElement('p')
el.innerHTML = hello('DPC', 'australian')

document.body.appendChild(el)
