const hellos = {
  'australian': 'G\'day',
  'dutch': 'Hallo',
  'french': 'Bonjour',
  'swedish': 'Hallå'
}

function hello (name, language) {
  return `${hellos[language]} ${name}!`
}

export default hello
