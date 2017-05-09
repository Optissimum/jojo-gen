import React from 'react'
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

const LinkBar = (props) => {
  return (
    <form>
      <Wrapper {...props}>
        <Field name='url' label='Video Url' style={{ flex: 3 }} />
        <Field name='end' label='Freeze Frame' style={{ flex: 1 }} />
        <StyledButton type='submit' >Jojo Me</StyledButton>
      </Wrapper>
    </form>
  )
}

LinkBar.propTypes = {
  reverse: PropTypes.bool,
}

export default LinkBar
