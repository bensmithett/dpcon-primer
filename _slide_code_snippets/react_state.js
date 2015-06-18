const Counter = React.createClass({
  getInitialState () {
    return {count: 0}
  },

  increment () {
    this.setState({
      count: this.state.count + 1
    })
  },

  render () {
    return (
      <button onClick={this.increment}>
        Count: {this.state.count}
      </button>
    )
  }
})
