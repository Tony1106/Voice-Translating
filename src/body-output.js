
import React , { Component } from 'react';
import Translate from './translate-text';


class Output extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleCreateNewOutput(){

  }
  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            Output
          </div>
          <div className="card-body">
            <h5 className="card-title">Text output 1:</h5>
            <Translate languageInput={this.props.languageInput} languageOutput = {this.props.languageOutput} textInput = {this.props.textInput} onChange = {this.handleCreateNewOutput}/>
          </div>
        </div>
      </div>
    )

  }
}

export default Output;
