import React from 'react'
import { storiesOf } from '@kadira/storybook'
import VideoJs from '.'

import menace from '../../../../public/menacing.png'
import tbc from '../../../../public/tbc.png'

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: 'https://giant.gfycat.com/ShinyFearfulAtlanticsharpnosepuffer.mp4',
    type: 'video/mp4',
  }],
}

const offset = {
  start: 0,
  end: 4,
}

const overlay = {
  image_url: 'http://i3.kym-cdn.com/photos/images/facebook/001/086/813/a65.png',
  start_time: 0,
  end_time: 4,
  opacity: 1,
  height: '100%',
}

storiesOf('VideoJs', module)
.add('default', () => (
  <VideoJs {...videoJsOptions} />
))
.add('overlay', () => (
  <VideoJs {...videoJsOptions} overlay={overlay} />
))
.add('offset', () => (
  <VideoJs {...videoJsOptions} offset={offset} />
))
.add('overlay and offset', () => (
  <VideoJs {...videoJsOptions} overlay={overlay} offset={offset} />
))
