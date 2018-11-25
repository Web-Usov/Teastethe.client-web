import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {HomePage, AuthPage} from 'pages'

export default (props) => (
    <Switch>
        <Route exact path="/"  component={HomePage}/>
        <Route path="/auth" component={AuthPage} />
        <Route component={HomePage}/>
    </Switch>
)