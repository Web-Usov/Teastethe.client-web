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
        user.socket.on('allTeas',(data) =>{
            if(data.error) return alert(data.error)
                
            setList(data.teas)
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
        user.socket.emit('allTeas')
    }
    render() { 
        const {user,teas,addTea} = this.props
        
        return ( 
            <div>                       
                <ul>
                    {teas.list.map((tea,i) => (
                        <li key={i}>
                            {JSON.stringify(tea)}
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