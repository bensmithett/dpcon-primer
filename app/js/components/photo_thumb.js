import React from 'react'

var PhotoThumb = React.createClass({
  handleClick () {
    this.props.wheneverClicked(this.props.photoIndex)
  },

  render () {
    return <img src={this.props.imagePath} width={50} onClick={this.handleClick} />
  }
})

export default PhotoThumb
