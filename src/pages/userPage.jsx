import React, { Component, Fragment } from 'react'
import {  Redirect  } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { teasActions } from "redux-config/actions";
import { AppBar,Head} from 'components'
import { TeasList, TeaAdd} from 'components/teas'
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    main: {
      [theme.breakpoints.up(1200)]: {
        width: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
});

class UserPage extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const {user } = this.props
    console.log(user.auth);
    
    // if (!user.auth) return window.location.pathname = '/auth/login'
    

  }
  
  render() {
    const {user, classes, } = this.props
    // if (!user.auth) return <Redirect to="/auth/login"/>
    
    return (
      <Fragment>
        <Head title="Profile"/>
        <AppBar title="Profile"/>
        <main className={classes.main}>
          <Typography variant="display1">Hello, {user.name}!</Typography>
        </main>
      </Fragment>
    )
  }
}

export default withStyles(styles)(connect(
  state => ({
      user:state.user
  }),
  dispatch => ({})
)(UserPage))