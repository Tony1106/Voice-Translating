import React , { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition'
import Dictaphone from './recognitionSpeech'



class Input extends Component {
  constructor(props) {

    super(props);

    this.state = {

    };


}


  render() {

    return (

      <div onClick = {this.handleClick} className="col">
        <div className="card">
          <div className="card-header">


          </div>
          <div className="card-body">
            <div>
              <h5 className="card-title">Text input 1:</h5>
            </div>
            <div>
              <Dictaphone isOn = {this.props.isOn} languageInput={this.props.languageInput} onChange = {this.props.onChange}/>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Input;
