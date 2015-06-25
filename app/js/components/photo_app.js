import React from 'react'
import photoData from 'js/helpers/photo_data'
import PhotoThumb from './photo_thumb'
import PhotoDetail from './photo_detail'
import 'css/components/photo_app'

const PhotoApp = React.createClass({
  getInitialState () {
    return {selectedPhoto: null}
  },

  handlePhotoSelection (photoIndex) {
    this.setState({
      selectedPhoto: photoData[photoIndex]
    })
  },

  render () {
    return (
      <div className="photo-app">
        {
          photoData.map((photo, i) => {
            return <PhotoThumb imagePath={photo.path} photoIndex={i} wheneverClicked={this.handlePhotoSelection} />
          })
        }
        <br />
        {
          this.state.selectedPhoto ?
          <PhotoDetail imagePath={this.state.selectedPhoto.path} />
          :
          <p>Select a photo!</p>
        }
      </div>
    )
  }
})

export default PhotoApp
