import React, { Component } from 'react'
import '../css/App.css'
import SimpleTable from '../js/simple-table'
//import FormFields from '../js/add-transaction'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Koinex Ticker</h1>
        <h2>Add Transactions</h2>

        <h2>Show Transactions</h2>
        <h3>Total Portfolio Value</h3>
        <SimpleTable />
      </div>
    );
  }
}

export default App
