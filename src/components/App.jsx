import React, { Component } from 'react';
import {withRoot} from 'components'
import socket from 'socket'
import Routers from 'routers'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActions } from 'redux-config/actions'
import { BrowserRouter } from 'react-router-dom';
import {SERVER} from 'config'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
		props.setSocket(socket)
	}

	componentWillMount() {

		const { user , login, logout} = this.props

		fetch(SERVER+'/api',{
			method:'get',
			mode:'cors',
			credentials: 'include',
		}).then(res => {
			console.log('Good connect to server');			
			user.socket.open()			
			user.socket.emit('getUser')
			this.setState({loading:false})
		}).catch(err => {
			console.error('Bad connect to server',err);
		})



		user.socket.on('getUser',(data)=>{
			if(data.error) {
				console.log(data.error)
			}
			else {
				login({name: data.user.name})
			}		
		})
		user.socket.on('logout',()=>{
			logout()		
		})
		user.socket.on('disconnect', (reason) => {
			if (reason === 'io server disconnect') user.socket.connect();			
		});

	}
	componentWillUpdate(){
		// const { user } = this.props		
		// user.socket.emit('getUser')
	}
    componentWillUnmount(){
        const {user} = this.props
        user.socket.off('logout')
        user.socket.off('disconnect')
        user.socket.off('getUser')
    }
	render() {
		return (
			<BrowserRouter>
				<Routers />
			</BrowserRouter>
		)
	}
}

const mapStateToProps = state => ({
	user: state.user
})
const mapDispatchToProps = dispatch =>(bindActionCreators(userActions, dispatch))

export default withRoot(connect(mapStateToProps,mapDispatchToProps)(App));
