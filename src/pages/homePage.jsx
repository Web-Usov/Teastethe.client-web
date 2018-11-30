import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { teasActions } from "redux-config/actions";
import { AppBar,Head} from 'components'
import { TeasList, TeaAdd} from 'components/teas'
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    main: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   justifyContent: 'space-around',
      // overflowX: 'hidden',
      [theme.breakpoints.up(1200)]: {
        width: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    grid: {
      height: "auto",
      // overflowX: 'auto',
      width:"100%",
      margin:0,
    },
});

class HomePage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {user, teas, classes, } = this.props
    if (!user.auth) return (
      <Fragment>
        <AppBar title={"Please, login =)"}/>
      </Fragment>
    )
    else
    return (
      <Fragment>
        <Head/>
        <AppBar title={"Welcome, " + user.name +"!"}/>
        <main className={classes.main}>
          <Typography variant="h6">Tea List</Typography>
          <Grid container className={classes.grid} justify="space-around" spacing={40}>
            <TeasList user={user} teas={teas} />               
          </Grid>
          <TeaAdd user={user}/>
        </main>
      </Fragment>
    )
  }
}

export default withStyles(styles)(connect(
  state => ({
      teas: state.teas,
      user:state.user
  }),
  dispatch => ({})
)(HomePage))