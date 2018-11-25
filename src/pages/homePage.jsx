import React, { Component, Fragment } from 'react'
import {TeasList, AppBar} from 'components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class HomePage extends Component {

  render() {
    const {user} = this.props
    if (!user.auth) return (
      <Fragment>
          <AppBar title={"Please, login =)"}/>
      </Fragment>
    )
    else
    return (
      <Fragment>
          <AppBar title={"Welcome, " + user.name +"!"}/>
          <TeasList user={user}/>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user:state.user
})


export default connect(mapStateToProps)(HomePage)