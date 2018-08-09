import React from 'react';

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			registerFirstName: '',
			registerLastName: '',
			registerEmail: '',
			registerPassword: '',
			registerConfirmPassword: ''
		}
	}

	onRegisterFirstNameChange = (event) => {
		this.setState({registerFirstName: event.target.value});
	}

	onRegisterLastNameChange = (event) => {
		this.setState({registerLastName: event.target.value});
	}

	onRegisterEmailChange = (event) => {
		this.setState({registerEmail: event.target.value});
	}

	onRegisterPasswordChange = (event) => {
		this.setState({registerPassword: event.target.value});
	}

	onRegisterConfirmPasswordChange = (event) => {
		this.setState({registerConfirmPassword: event.target.value});
	}

	submitRegister = () => {
		//log state
		console.log(this.state);
		//Make fetch api call to submit sign in
	}

	render() {
		return (
			<div>
				<h2>Register</h2>
				<label htmlFor='registerFirstName'>First Name</label>
				<input type='text' name='registerFirstName' onChange={this.onRegisterFirstNameChange} />
				<br/>
				<label htmlFor='registerLastName'>Last Name</label>
				<input type='text' name='registerLastName' onChange={this.onRegisterLastNameChange} />
				<br/>
				<label htmlFor='registerEmail'>Email</label>
				<input type='text' name='registerEmail' onChange={this.onRegisterEmailChange} />
				<br/>
				<label htmlFor='registerPassword'>Password</label>
				<input type='text' name='registerPassword' onChange={this.onRegisterPasswordChange} />
				<br/>
				<label htmlFor='registerConfirmPassword'>Confirm Password</label>
				<input type='text' name='registerConfirmPassword' onChange={this.onRegisterConfirmPasswordChange} />
				<br/>
				<button id='registerBtn' onClick={this.submitRegister}>Register</button>
			</div>
			);
	}

}

export default Register;