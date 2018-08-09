import React from 'react';

class SignIn extends React.Component  {
		constructor() {
			super();
			this.state = {
				signInEmail: '',
				signInPassword: ''
			}
		}

		onSignInEmailChange = (event) => { //set state input to signIn email input
			this.setState({signInEmail: event.target.value});
		}

		onSignInPasswordChange = (event) => { //set state input to signIn email input
			this.setState({signInPassword: event.target.value});
		}

		submitSignIn = () => {
			//fetch call to sign in endpoint
			console.log(this.state);
		}
		render() {
			return (
			<div>
				<h2>Sign In</h2>
				<form>
				<label htmlFor='signInEmail'>Email: </label>
				<input type='text' name='signInEmail' onChange={this.onSignInEmailChange}/>
				<br/>
				<label htmlFor='signInPassword'>Password: </label>
				<input type='password' name='signInPassword'  onChange={this.onSignInPasswordChange}/>
				</form>
				<button onClick={this.submitSignIn} id='submitSignInBtn' value='Sign In'>Sign In</button>
			</div>
			);
		}
		
}

export default SignIn;