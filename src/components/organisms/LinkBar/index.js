import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Field, Button } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`

const StyledButton = styled(Button)`
  margin-bottom: 1rem;
  flex: none;
`

class LinkBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: this.props.url,
      timestamp: this.props.timestamp,
    }
  }

  render() {
    return (
      <form>
        <Wrapper {...this.props}>
          <Field name='url' label='Video Url' style={{ flex: 4 }} onChange={e => (this.setState({ url: e.target.value }))} />
          <Field name='end' label='Freeze Frame' style={{ flex: 1 }} onChange={e => (this.setState({ timestamp: e.target.value }))} />
          <StyledButton type='submit' >Jojo Me</StyledButton>
        </Wrapper>
      </form>
    )
  }
}

LinkBar.propTypes = {
  url: PropTypes.string,
  timestamp: PropTypes.number,
}

export default LinkBar
