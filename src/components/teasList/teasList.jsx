import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { teasActions } from "redux-config/actions";
import {TeasAdd} from 'components'
class TeasList extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentWillMount(){
        const {user,setList,addTea} = this.props
        user.socket.on('resAllTeas',(data) =>{
            setList({
                teas:data.teas,
                teasId:data.teasId
            })
        })
        user.socket.on('addTea',(data) => {
            const {error,tea,isYourTea} = data
            if(!isYourTea){
                if(error){
                    return alert(error)
                }                
                addTea(tea)
            }
        })
        user.socket.emit('reqAllTeas')
    }
    render() { 
        const {user,teas,addTea} = this.props
        return ( 
            <div>                       
                <ul>
                    {teas.listId.map((teaId,i) => (
                    <li key={i}>
                        {JSON.stringify(teas.list[teaId])}
                    </li>
                    ))}
                </ul>
                <TeasAdd addTea={addTea} user={user}/>
            </div> 
         );
    }
}
 
export default connect(
    state => ({
        teas:state.teas,
    }),
    dispatch => bindActionCreators(teasActions,dispatch)
)(TeasList);