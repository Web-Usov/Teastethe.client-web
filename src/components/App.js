import React, { Component } from 'react';
import socket from 'socket'
import './App.css';
import Routers from 'routers'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActions } from 'redux-config/actions'
import { BrowserRouter, Route } from 'react-router-dom';
import {Login} from 'components'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      connected:false
    }
    props.setSocket(socket)
    
    
  }
  componentWillMount(){
    const {user} = this.props
    
    user.socket.on('connect',() => {
      this.setState({connected:true})
    })
    user.socket.on('disconnect', (reason) => {
      if (reason === 'io server disconnect') {
        user.socket.connect();
      }
    });

  }
  componentDidMount(){
  }
  render() {
    return (
      <BrowserRouter>
        <Routers/>      
      </BrowserRouter>
    )
  }
}

export default connect(
  state => ({
    user:state.user
  }),
  dispatch => (bindActionCreators(userActions,dispatch))
)(App);
