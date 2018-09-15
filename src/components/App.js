import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
    <div>
      <div>Countdown to Extinction (11/18/2018)</div>
      <div>14 Days</div>
      <div>30 Hours</div>
      <div>15 Minutes</div>
      <div>20 Seconds</div>
      <div>
        <input placeholder='New Date' />
        <button>Submit</button>
      </div>
    </div>
    )
  }
}

export default App;