import React, { Component } from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'November 11, 2018',
      newDeadline: ''
    }
  }
  
  changeDeadline(){
    this.setState({
      deadline: this.state.newDeadline
    });
  }
  
  render(){
    return (
    <div className='App'>
      <div className='App-title'>Countdown to {this.state.deadline}</div>
      <Clock
      deadline={this.state.deadline}
      />
      <Form inline>
        <FormControl
          onChange={event => { this.setState({ newDeadline: event.target.value }) }}
          placeholder='New Date' />
        <span style={{marginRight: '20px'}}></span>
        <Button onClick={() => this.changeDeadline()}>Submit</Button>
      </Form>
    </div>
    )
  }
}

export default App;