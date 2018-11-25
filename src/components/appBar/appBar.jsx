import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
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
		marginLeft: -12,
		marginRight: 10,
	},
	logoBtn: {
		marginRight: 20,
		fontSize: 20,
	},
	authBtn: {
		marginLeft: 15,
	}
});

class AppBarOver extends Component {
	state = {
	}
	checkAuth(){
		const {user,classes} = this.props
		if(!user.auth) return (
			<Fragment>
				<Button className={classes.authBtn} color="inherit" variant="outlined" component={Link} to='/auth/login'>Log in</Button>
				<Button className={classes.authBtn} color="inherit" variant="outlined" component={Link} to='/auth/register'>Sign In</Button>
			</Fragment>
		);
		else return(
			<Fragment>
				<Button className={classes.authBtn} color="inherit" variant="outlined" component={Link} to='/auth/logout'>Log Out</Button>
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
							<MenuIcon />
						</IconButton>
						<Button className={classes.logoBtn} color="inherit" size="large" component={Link} to='/' >{APP_NAME}</Button>
						<Typography variant="h6" color="inherit" className={classes.grow}>
							{title}
						</Typography>
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