import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './body.js'
import Setting from './Setting.js'
import SpeechRecognition from 'react-speech-recognition'
var reactSpeechRecognition = require("react-speech-recognition")


class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      isOn: false,
      languageInput: 'en-US',
      languageOutput: 'vi-VN'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSetting = this.handleSetting.bind(this);
}
handleClick(){
  this.setState({
    isOn: true
  })
  
}
handleSetting(e){
 this.setState({
   languageInput: e.inputSetting,
   languageOutput: e.outputSetting
 })
}

  render() {
    return (
      <div>
        <h1>VOICE TRANSLATING</h1>


        <button onClick={this.handleClick} type="button" className="btn btn-toggle" data-toggle="button" aria-pressed="false" autoComplete="off">
          <div className="handle" />
        </button>
        <Setting onChange= {this.handleSetting}/>
        <Body isOn = {this.state.isOn} languageInput={this.state.languageInput} languageOutput = {this.state.languageOutput}/>
</div>
    )
  }
}

export default App;
