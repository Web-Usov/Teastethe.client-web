import React, { Component,Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from 'redux-config/actions'
import { Auth, AppBar, Head } from 'components'
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

const styles = theme => ({
	main:{
		backgroundColor: theme.palette.primary.light,
	},
	grid:{
		width:"100%",
		margin:0,
	}
})

class AuthPage extends Component {
	constructor(props){
		super(props)
		this.state = {
			type:'login',
		}
	}
	componentWillMount(){
		this.checkTypeAuth()
	}
	componentDidUpdate(){
		this.checkTypeAuth()
	}
	checkTypeAuth(){
		const {pathname} = window.location;
		const path = pathname.split('/');
		const type = path[path.length-1];
		const {user, logout} = this.props

		if(type != this.state.type){
			switch (type) {
				case 'login':
					this.setState({type})				
					break;
				case 'register':
					this.setState({type})		
					break;
				case 'logout':				
					user.socket.emit('logout')
					break;
				default:
					break;
			}
		}
		
	}
	render() {
		const { classes,user} = this.props
		const {type} = this.state
		if (user.auth) return <Redirect to='/' />

		return (
			<Fragment>	
				<Head subTitle={type}/>			
				<AppBar title={"Auth page"}/>				
				<Grid container  className={classes.grid} spacing={16} justify="center">
						<Grid item  xs={12}>					
							<Auth user={user} type={type}/>						
						</Grid>
					</Grid>
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators(userActions, dispatch)

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AuthPage));