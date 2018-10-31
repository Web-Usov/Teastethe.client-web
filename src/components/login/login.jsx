import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:false
        }
    }
    componentWillMount(){
        
        const {user,login} = this.props
        user.socket.on('login',(data)=>{
            this.setState({loading:false})
            if(data.error){
                return alert(data.error)                
            }

            login({
                name:data.name
            })     
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState({loading:true})
        const {user} = this.props
        const name = this.refs.inputName.value
        user.socket.emit('login',name)  
    }
    render() { 
        return ( 
            <div>
                <form action="" onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="inputName">Name:</label>                    
                    <input type="text" name="" id="inputName" ref='inputName' disabled={this.state.loading}/>
                    <button type="submit" disabled={this.state.loading}>Send</button>
                </form>
            </div>
         );
    }
}
 
export default Login;