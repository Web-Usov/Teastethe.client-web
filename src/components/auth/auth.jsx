import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from 'redux-config/actions'
import { withStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Typography, Button, FormControl, InputLabel, Input } from '@material-ui/core/';
import LockIcon from '@material-ui/icons/LockOutlined';

const styles = theme => ({
    paper: {
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        //marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing.unit * 3,
    },
    paperTitle: {
        fontSize: 20,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            valueName: null,
            valuePassword: null,
            titles:null
        }
    }
    componentWillMount() {

        const { user, login } = this.props

        const titles = [];
        titles['login'] = "Login page";
        titles['register'] = "Register page";
        this.setState({
            titles
        })

        user.socket.on('login', (data) => {
            this.setState({ loading: false })
            if (data.error) {
                return alert(data.error)
            }
            const {name} = data.user
            login({name})
        })
        
        user.socket.on('register', (data) => {
            this.setState({ loading: false })
            if (data.error) {
                return alert(data.error)
            } alert(data.message)
        })

    }
    componentWillUnmount(){
        const {user} = this.props
        user.socket.off('register')
        user.socket.off('login')
    }
    handleSubmit(e) {
        e.preventDefault()
        this.setState({ loading: true })

        const { type } = this.props

        switch (type) {
            case 'login':{
                const { user } = this.props
                const name = this.state.valueName
                user.socket.emit('login', {name})
                break;
            }
            case 'register':{
                const { user } = this.props
                const name = this.state.valueName
                user.socket.emit('register', {name})
                break;
            }                
            default:
                break;
        }
    }
    handleChange(e) {
        e.preventDefault()
        const { type } = this.props

        switch (type) {
            case 'login':
                this.setState({ valueName: e.target.value })
                break;
            case 'register':
                this.setState({ valueName: e.target.value })
                break;            
            default:
                break;
        }
    }
    viewAuthForm() {
        const { classes, type } = this.props;
        switch (type) {
            case 'login':
                return (
                    <form className={classes.form} onSubmit={(e) => this.handleSubmit(e)} >
                        <FormControl margin="normal" required fullWidth disabled={this.state.loading}>
                            <InputLabel htmlFor="username">User Name</InputLabel>
                            <Input id="username" name="username" autoComplete="login" autoFocus type='text' onChange={(e) => this.handleChange(e)} />
                        </FormControl>
                        {/* <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>
                         */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={this.state.loading}
                        >Log In</Button>
                    </form>
                )
            case 'register':
                return (
                    <form className={classes.form} onSubmit={(e) => this.handleSubmit(e)}>
                        <FormControl margin="normal" required fullWidth disabled={this.state.loading}>
                            <InputLabel htmlFor="username">User Name</InputLabel>
                            <Input id="username" name="username" autoComplete="login" autoFocus type='text' onChange={(e) => this.handleChange(e)} />
                        </FormControl>
                        {/* <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" />
                            </FormControl>
                        */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={this.state.loading}
                        >Sign Up</Button>
                    </form>

                )
            default:
                break;
        }
    }
    render() {
        const { classes, type } = this.props;
        const { titles } = this.state;
        return (
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="button" className={classes.paperTitle}>{titles[type]}</Typography>
                {this.viewAuthForm()}
            </Paper>
        );
    }
}
const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators(userActions, dispatch)

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Auth));