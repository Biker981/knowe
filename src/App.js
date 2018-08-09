import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register/Register';
import SignIn from './SignIn/SignIn';
import Portfolio from './Portfolio/Portfolio';
import Navigation from './Navigation/Navigation'
class App extends Component {

  constructor() {
    super();
    this.state = {
      route: ''
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
    const { route } = this.state;
    switch(route) {
      case 'Register' :
        return (
          <div>
           <Navigation onRouteChange={this.onRouteChange}/><br/>
           <Register />
          </div>
          );
      case 'SignIn':
        return (
            <div>
             <Navigation onRouteChange={this.onRouteChange}/><br/>
             <SignIn />
            </div>
          );

      case 'Portfolio' :
        return (
          <div>
           <Navigation onRouteChange={this.onRouteChange}/><br/>
           <Portfolio />
          </div>
          );

       default: 
         return (
          <div>
           <Navigation onRouteChange={this.onRouteChange}/><br/>
          </div>
          );
    }
  }
}

export default App;
