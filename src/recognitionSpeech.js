import React, {  Component } from 'react'
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  finalTranscript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool

}
const options = {
  autoStart: false
}


// this.props.onChange({this.props.transcript})




class Dictaphone extends Component {
  constructor(props) {

    super(props);

    this.state = {
      isOn: false,
      isReset: false,
      historyTransript: [],
      text: "",
      time: ''

    };
    this.handleClick = this.handleClick.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
}
componentWillReceiveProps(nextProps) {
  this.handleClick(nextProps);
}

handleClick (nextProps){
  this.setState({
    isOn: !nextProps,
  })
  if (!nextProps) {this.handleStart()} else  {this.handleStop()};
}


handleStart () {
  this.props.resetTranscript();
  this.props.startListening();



}

handleStop() {
  this.props.stopListening();

  var newArray = []
  newArray  = this.props.transcript;
  this.setState({
      historyTransript: this.state.historyTransript.concat(newArray)
  })
  var x = this.state.historyTransript.concat(newArray)
  this.props.onChange(x);
}

  render() {


    const { transcript,finalTranscript,startListening,  resetTranscript, browserSupportsSpeechRecognition, recognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }
    recognition.lang = this.props.languageInput;



    var text = this.state.historyTransript.map((text, index) =>
      <div key = {index} className="container darker">
        <img src="https://cdn4.iconfinder.com/data/icons/people-39/100/Headphone-512.png" alt="Avatar" className="right" />
        <p> {text} </p>

        <span className="time-left">{this.state.time}</span>
      </div>)



    return (
    <div>
    <button type="button" className="btn btn-primary">{this.state.isOn? "On" : "Off"}</button>

    {text}
    </div>

    )
  }
}





export default SpeechRecognition(options)(Dictaphone)
