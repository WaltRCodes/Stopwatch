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
    //psuedocode: create a function to reset the timer
    resetTimer() {
      //this sets the time to 0
      this.setState(prevState => ({
        time: 0
      }));
    }
    //psuedocode: have a function increment the time when the toggle for th timer is on
    onChange = (e) => {
      //on a change the timer is update 
      if(this.state.isToggleOn){
            console.log(this.state.time);
            this.setState(prevState => ({
            time: prevState.time+1
            }));
        }
    }
    //psuedocode: have the timer count up. this is actually depreciated and should be changed
    componentWillUpdate(){
        this.time = setInterval(() => this.onChange(), 1000);
    }
    //psuedocode: render everything needed for the timer
    render() {
        //this creates buttons for the timer
        return (
            <div>
                <h1 id="timer">{this.state.time}</h1>
                <button onClick={this.handleClick}>
                Start
                </button>
                <button onClick={this.handleClick}>
                Pause
                </button>
                <button onClick={this.resetTimer}>
                Reset
                </button>
            </div>
        );
    }
}