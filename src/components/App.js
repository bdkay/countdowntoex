import React, { Component } from 'react';

class App extends Component {
  render(){
    return (
    <div className='App'>
      <div className='App-title'>Countdown to Extinction (11/18/2018)</div>
      <div className='Clock-days'>14 Days</div>
      <div className='Clock-hours'>30 Hours</div>
      <div className='Clock-minutes'>15 Minutes</div>
      <div className='Clock-seconds'>20 Seconds</div>
      <br />
      <div>
        <input placeholder='New Date' />
        <button>Submit</button>
      </div>
    </div>
    )
  }
}

export default App;