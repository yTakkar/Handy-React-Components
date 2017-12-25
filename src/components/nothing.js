import React from 'react'
import PropTypes from 'prop-types'
import { nothing, nothing_img, nothing_span } from '../styles/nothing-s'

export default class Nothing extends React.Component{
  render(){
    let { mssg, showMssg } = this.props
    return (
      <div style={{
        ...nothing,
        border: !showMssg ? 'none' : null
      }} >
        <img style={nothing_img} src='../images/large.jpg' />
        { showMssg ? <span style={nothing_span} >{mssg}</span> : null }
      </div>
    )
  }
}

Nothing.defaultProps = {
  mssg: 'Hello, a message for you!',
  showMssg: true
}

Nothing.propTypes = {
  mssg: PropTypes.string,
  showMssg: PropTypes.bool
}
