const Child = React.createClass({
  render () {
    return <div className='child'>Name: {this.props.name}</div>
  }
})

const Parent = React.createClass({
  render () {
    return (
      <div className='parent'>
        <Child name='Abe' />
        <Child name='Cleo' />
        <Child name='Gandhi' />
      </div>
    )
  }
})
