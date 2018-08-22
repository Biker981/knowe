import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register/Register';
import SignIn from './SignIn/SignIn';
import Portfolio from './Portfolio/Portfolio';
import Navigation from './Navigation/Navigation'
class App extends Component {
  routeToComponentMap = {//links nav routes to app pages
    Register: <Register />,
    SignIn: <SignIn />,
    Portfolio: <Portfolio />,
  }
  
  constructor() {
    super();
    this.state = {
      route: '',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    console.log('Selected Route:', route)
    console.log('Fired route change');
    const validRoutes = ['SignIn', 'Register', 'Portfolio', 'SignOut'];
    if (validRoutes.includes(route)) {
      this.setState({route: route});
    }
    console.log('Current State Route: ', this.state.route);
    return;
  }


  render() {
    const { route, isSignedIn } = this.state;
    return(
      <div>
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.routeToComponentMap[route]}
      </div>);
   
  }

}

export default App;
