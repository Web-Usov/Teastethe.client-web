import React, { Component } from 'react';
import socket from 'socket'
import './App.css';
import {TeasList, Login } from 'components'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActions } from 'redux-config/actions'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
    props.setSocket(socket)
    
    
  }
  componentWillMount(){
    const {user} = this.props
    console.log(user.socket.connected);
    
    user.socket.on('disconnect', (reason) => {
      if (reason === 'io server disconnect') {
        user.socket.connect();
      }
    });

  }
  componentDidMount(){
    const {user} = this.props
    console.log(user.socket.connected);

  }
  render() {
    
    const {login,user} = this.props
    
    if(user.auth){

      return (
        <div className="App">
          <header>
            <h1>Welcome, {user.name}!</h1>
          </header>   
          <TeasList user={user}/>
        </div>
      )

    }else{

      return (
        <div className="App">       
          <Login login={login} user={user}/>
        </div>        
      )

    }
  }
}

export default connect(
  state => ({
    user:state.user
  }),
  dispatch => (bindActionCreators(userActions,dispatch))
)(App);
