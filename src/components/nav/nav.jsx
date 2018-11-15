import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <Fragment>
          <Link to='/login'>Login</Link>
      </Fragment>
    )
  }
}
