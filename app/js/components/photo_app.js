import React from 'react'
import photoData from 'js/helpers/photo_data'

const PhotoApp = React.createClass({
  render () {
    console.table(photoData)
    return (
      <div>
        This is my photo app
      </div>
    )
  }
})

export default PhotoApp
