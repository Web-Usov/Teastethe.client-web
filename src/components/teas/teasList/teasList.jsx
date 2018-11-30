import React, { Component,Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { teasActions } from "redux-config/actions";
import { TeaItem } from '../index'
import { Grid} from '@material-ui/core'

class TeasList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentWillMount() {
        const { user, setList, addTea } = this.props
        user.socket.on('allTeas', (data) => {
            if (data.error) return alert(data.error)

            setList(data.teas)
        })
        user.socket.on('addTea.b', (data) => {
            const { error, tea } = data
            if (error) return alert(error)
            addTea(tea)
        })
        user.socket.emit('allTeas')
    }
    componentWillUnmount() {
        const { user } = this.props
        user.socket.off('allTeas')
        user.socket.off('addTea.b')
    }
    render() {
        const {teas} = this.props

        return (
            <Fragment>
                {teas.list.map(tea => (
                    <Grid item  xs={12} sm={6} md={4} lg={3} key={tea._id} >
                        <TeaItem tea={tea}  />
                    </Grid>
                ))}     
            </Fragment>
        );
    }
}

export default connect(
    state => ({
    }),
    dispatch => bindActionCreators(teasActions, dispatch)
)(TeasList)