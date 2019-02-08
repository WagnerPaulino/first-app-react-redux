import React, { Component } from 'react';
import Store from './stores/store';
import { Provider } from 'react-redux';
import './App.css';
import Aplicacao from './components/aplicacao';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Aplicacao />
      </Provider>
    );
  }
}

export default App;
