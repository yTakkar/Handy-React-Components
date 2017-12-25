import React from 'react'
import PropTypes from 'prop-types'
import { colored_overlay, hidden_overlay, overlay } from '../styles/overlay-s'

export default class Overlay extends React.Component {
  render() {
    let
      { type } = this.props,
      style

    if (type == 'black') {
      style = overlay
    } else if (type == 'white') {
      style = hidden_overlay
    } else if (type == 'colored') {
      style = colored_overlay
    }

    return (
      <div style={style} ></div>
    )
  }
}

Overlay.defaultProps = {
  type: 'black'
}

Overlay.propTypes = {
  type: PropTypes.string
}
