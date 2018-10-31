import React, { Component } from 'react';
class TeasAdd extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:false
        }
    }
    componentWillMount(){
        
        const {user,addTea} = this.props
        user.socket.on('addTea',(data)=>{
            const {error,tea,isYourTea} = data
            this.setState({loading:false})
            if(isYourTea){
                this.setState({loading:false})
                if(error){
                    return alert(error)                
                }
                alert("Tea successfully added")
                addTea(tea)
            }              
        })

    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({loading:true})
        const {user} = this.props
        const name = this.refs.inputNameTea.value
        const type = this.refs.inputTypeTea.value
        user.socket.emit('addTea',{
            name,
            type
        })  
    }
    render() { 
        return ( 
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label htmlFor="">
                    Name:
                    <input type="text" disabled={this.state.loading} ref="inputNameTea"/>
                </label>
                <label htmlFor="">
                    Type:
                    <input type="text" disabled={this.state.loading} ref="inputTypeTea"/>
                </label>
                <button type="submit" disabled={this.state.loading}>Add</button>
            </form>
         );
    }
}
 
export default TeasAdd;