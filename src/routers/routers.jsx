import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import {HomePage, LoginPage} from 'pages'
import {Nav} from 'components'

export default class Routers extends Component {
  render() {
    return (
        <div className='App'>
            <Route path='/' component={Nav}/>
            <Switch>
                <Route exact path="/"  component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route component={HomePage}/>
            </Switch>
        </div>
    )
  }
}
