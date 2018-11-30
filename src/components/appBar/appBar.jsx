import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Hidden, Menu, MenuItem} from '@material-ui/core/';
import { Person, MenuOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {APP_NAME} from '../../strings.js'

const styles = theme => ({
	root: {
	},
	grow: {
		flexGrow: 1,
	},
	menuBtn: {
		marginLeft: 0,
		marginRight: 12,
		marginTop: 10,
		marginBottom: 10,
	},
	logoBtn: {
		marginRight: 20,
		fontSize: 20,
	},
	authBtn: {
		marginLeft: 15,
	},
	accountBtn:{
		marginTop: 10,
		marginBottom: 10,
	}
});

class AppBarOver extends Component {
	constructor(props){
		super(props)
		this.state = {
			anchorEl: false,
		}
	}
	handleClick = e => {		
		this.setState({ anchorEl: e.currentTarget.id });
	};
	
	handleClose = () => {
		this.setState({ anchorEl: null });
	};
	checkAuth(){
		const {user,classes} = this.props
		const {anchorEl} = this.state;
		if(!user.auth) return (
			
			<Fragment>
				<Hidden xsDown>
					<Button className={classes.authBtn} color="inherit" variant="outlined" component={Link} to='/auth/login'>Log In</Button>
					<Button className={classes.authBtn} color="inherit" variant="outlined" component={Link} to='/auth/register'>Sign Up</Button>
				</Hidden>
				<Hidden smUp>
					<IconButton 
						className={classes.accountBtn} 
						color="inherit" 
						onClick={this.handleClick}
						id="authMenu"
						ref="authMenu">
						<Person />
					</IconButton>
					<Menu	
						anchorEl={document.getElementById('authMenu')}
						open={anchorEl === 'authMenu' ? true : false}
						onClose={this.handleClose}>

						<MenuItem onClick={this.handleClose} component={Link} to='/auth/login'>Log In</MenuItem>
						<MenuItem onClick={this.handleClose} component={Link} to='/auth/register'>Sign Up</MenuItem>

					</Menu>
				</Hidden>
			</Fragment> 
		);
		else return(
			<Fragment>
				<Hidden xsDown>
					<Button className={classes.authBtn} color="inherit" variant="outlined" component={Link} to='/auth/logout'>Log Out</Button>
				</Hidden>
				<Hidden smUp>
					<IconButton className={classes.accountBtn} color="inherit" aria-label="Menu">
						<Person />
					</IconButton>
				</Hidden>
			</Fragment>
		)
	}
	render() {
		const { classes, title } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton className={classes.menuBtn} color="inherit" aria-label="Menu">
							<MenuOutlined />
						</IconButton>

						<Hidden xsDown>
							<Button className={classes.logoBtn} color="inherit" size="large" component={Link} to='/' >{APP_NAME}</Button>
							<Typography variant="h6" color="inherit" className={classes.grow}>
								{title}
							</Typography>
						</Hidden>
						<Hidden smUp>
							<Typography variant="subtitle1" color="inherit" className={classes.grow}>
								{title}
							</Typography>
						</Hidden>

						{this.checkAuth()}						
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

AppBarOver.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string
};

const mapStateToProps = state => ({
	user: state.user
})

export default withStyles(styles)(connect(mapStateToProps)(AppBarOver));