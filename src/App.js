import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';

import Login from './components/Login';
import Lowongan from './components/Lowongan';

class App extends Component {
  state = {
    token: '',
  };

  componentDidMount() {
    // 
  }

  handleToken = (value) => { this.setState({ token: value }) }

  render() {
    if (!this.state.token) {
      return <Login onLogin={this.handleToken} />
    }
    
    return (
      <Lowongan />
    );
  }
}

export default App;
