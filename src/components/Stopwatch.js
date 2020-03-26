//first I import React as it is needed for my code
//psuedocode import react
import React from 'react';
//created the stopwatch class which extends component
//psuedocode: create the Stopwatch class
class Stopwatch extends React.Component {
    //psuedocode: create the constructor for the Stopwatch class
    constructor(props) {
      //psuedocode:call the super methods to input props
      super(props);
      //psuedocode: create state keys for the toggle of the timer and time key
      this.state = {
        isToggleOn: false,
        time: 0
      };
      //psuedocode: creating functions to bund to the stopwatch class
      this.handleClick = this.handleClick.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
    }
    //psuedocode: create a function in order to check whether the timer is on or not
    handleClick() {
      //this updates the toggle state
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
}