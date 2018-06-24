import React, { Component } from 'react';
import Layout from '../components/Layout/Layout'

class App extends Component {

  handleData(data) {
    let result = JSON.parse(data);
    console.log(result);
  }
  render() {
    return (
      <div>
      <Layout />
      </div>
    );
  }
}

export default App;
