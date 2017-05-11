import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import videojs from 'video.js'
import offset from 'videojs-time-offset'
import overlay from '../../../static/videojs-overlay'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
`

class VideoJs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
      jojo: 0,
    }

    console.log(this.props)
  }

  componentWillMount() {
    this.props.offset ? videojs.registerPlugin('offset', offset) : null
    this.props.overlay ? videojs.registerPlugin('overlay', overlay) : null
  }

  componentDidMount() {
    this.player = videojs(this.videoNode, this.props,
    //   () => {
    //   this.props.offset ? this.offset(this.props.offset) : null
    //   this.props.overlay ? this.overlay(this.props.overlay) : null
    // }
    )
    this.player.offset()
    // this.player.overlay()
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <Wrapper {...this.props}>
        <div data-vjs-player>
          <video ref={node => (this.videoNode = node)} className='video-js vjs-16-9' />
        </div>
      </Wrapper>
    )
  }
}

VideoJs.propTypes = {
  offset: PropTypes.objectOf(PropTypes.number),
  overlay: PropTypes.object,
}

VideoJs.defaultProps = {
  palette: 'grayscale',
}

export default VideoJs
