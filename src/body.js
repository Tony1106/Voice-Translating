import React , { Component } from 'react';
import Input from './body-input'
import Output from './body-output'
import {observable} from "mobx";


class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: [],
    };

    this.handleInput = this.handleInput.bind(this)
  }
//   componentDidUpdate(_, previousState) {
//
// }
  handleInput(x){

    this.handleSubmit(x)

  }
  handleSubmit(x){
    this.setState({
      textInput: x,
    })


  }

  render() {
var textInput = this.state.textInput;
console.log(textInput);
    return (
      //BEGIN BODY
      <div className="container">
        <div className="row">
          <Input isOn = {this.props.isOn} languageInput={this.props.languageInput} onChange = {this.handleInput}/>
          <Output languageInput={this.props.languageInput} languageOutput = {this.props.languageOutput} textInput = {textInput}/>

        </div>
      </div>  //END BODY

    )



  }
}

export default Body;
