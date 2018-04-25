import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './label.style.css'

export default class Label extends Component {

  render() {
    const { children, header } = this.props;
  
    return (
      <div className='label'>
        <div className='label__header'>{header}</div>
        <div className='label__text'>{children}</div>
      </div>  
    )
  }
}

Label.propTypes = {
  header: PropTypes.string,
  children: PropTypes.element
}