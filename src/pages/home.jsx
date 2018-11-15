import React, { Component, Fragment } from 'react'
import {TeasList} from 'components'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class HomePage extends Component {

  render() {
    const {user} = this.props
    if (!user.auth) {
        return <Redirect to='/login'/>
    } 
    return (
        <Fragment>
            <header>
            <h1>Welcome, {user.name}!</h1>
            </header>   
            <TeasList user={user}/>
        </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user:state.user
})


export default connect(mapStateToProps)(HomePage)