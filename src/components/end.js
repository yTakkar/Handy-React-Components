import React from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types'
import { Page_end, FocusIn, FocusOut } from '../styles/end-s'

export default class End extends React.Component {

  toTop() {
    $('html, body').animate({
      scrollTop: 0
    }, 450)
  }

  render() {
    return (
      <div style={Page_end} onMouseEnter={FocusIn} onMouseLeave={FocusOut} onClick={this.toTop}>
        <span>{this.props.mssg}</span>
      </div>
    )
  }
}

End.defaultProps = {
  mssg: 'Looks like you\'ve reached the end'
}

End.propTypes = {
  mssg: PropTypes.string
}
