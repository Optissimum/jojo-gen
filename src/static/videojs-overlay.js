import { React } from 'react'
import videojs, { plugin } from 'video.js'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: '100%';
  height: '100%';
  position: absolute;
  top: 0;
  left: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

class Overlay extends plugin {
  constructor(player, options) {
    super(player, options)

    this.state = {
      image_url: (options.image_url || null),
      click_url: (options.click_url || ''),
      start: (options.start || null),
      end: (options.end || null),
      opacity: (options.opacity || 0.7),
      height: (options.height || '100%'),
      width: (options.width || '100%'),
      x: (options.x || 0),
      y: (options.x || 0),
      showingOverlay: false,
    }

    player.on('timeupdate', this.checkOverlay())
    player.on('loadedmetadata', this.checkEndTime())
  }

  dispose() {
    super.dispose()
  }

  checkOverlay() {
    if ((this.player.currentTime() >= this.state.start)
        && (this.player.currentTime() <= this.state.end)) {
      this.showImage
    } else {
      this.hideImage
    }
  }

  checkEndTime() {
    if (this.state.end === null) {
      this.state.end = this.player.duration() + 1
    }
  }

  showImage() {
    if (!this.state.showingOverlay) {
      this.setState({
        showingImage: true,
      })
    }

    return console.log('lol')
  }

  hideImage() {
    if (this.state.showingImage) {
      this.setState({
        showingImage: false,
      })
    }
  }
}

videojs.registerPlugin('overlay', Overlay)

export default Overlay
