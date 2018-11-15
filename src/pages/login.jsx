import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Login } from 'components'
import { userActions } from 'redux-config/actions'

class LoginPage extends Component {
  render() {
    const {user, login} = this.props
    if(user.auth) return <Redirect to='/'/>
    return (
        <Fragment>
            <Login login={login} user={user}/>
        </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  user:state.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators(userActions,dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)