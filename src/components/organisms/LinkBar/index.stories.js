import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { LinkBar } from 'components'

storiesOf('LinkBar', module)
  .add('default', () => (
    <LinkBar />
  ))
  .add('reverse', () => (
    <LinkBar reverse />
  ))
