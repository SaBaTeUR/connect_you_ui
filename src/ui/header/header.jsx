import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {header} from './header.style.css'

export default class Header extends Component {

  render() {
    const { children } = this.props;
      
    return (
      <div className={header}>
        {children}
      </div>  
    )

  }
}

Header.propTypes = {
  children: PropTypes.element
}  