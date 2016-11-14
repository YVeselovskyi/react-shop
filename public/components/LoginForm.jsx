import React from 'react';
import axios from 'axios';

class LoginForm extends React.Component{
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.state = {data: {},  loginState: '' , successLogin: false};
	}
	onFormSubmit(e){
		e.preventDefault();
		const that = this;
		let data = {};
		let login = this.refs.login.value;
		let password = this.refs.password.value;
		data.login = login;
		data.password = password;

		axios.post('/login', data)
  			.then(function (response) {
    			let authCheck = response.data['Auth'];
    			if(authCheck == 'Logged'){
    				that.setState({loginState: 'success' , successLogin: true})
    			} else {
    				that.setState({loginState: 'deny'})
    			}
  			})
  			.catch(function (error) {
    			console.log(error);
  			});
	}

	render(){
		let loginClass = `form-control ${this.state.loginState}`;
		const hiddenStyle  = {display: 'none'};
		const blockStyle  = {display: 'block'};
		return(
			<div>
			<form onSubmit={this.onFormSubmit} id="login-form" style={this.state.successLogin ? hiddenStyle: blockStyle}>
				<div>
					<h2>Login</h2>
				</div>
				<div className="form-group">
	  				<input placeholder="Login" type="text" className={loginClass} ref="login"/>
				</div>
				<div className="form-group">
	  				<input placeholder="Password" type="password" className="form-control" ref="password" id="password"/>
				</div>
				<button className="btn">Login</button>
			</form>
			<div style={this.state.successLogin ? blockStyle:hiddenStyle}>Success!</div>
			</div>
		)
	}
}

module.exports = LoginForm;