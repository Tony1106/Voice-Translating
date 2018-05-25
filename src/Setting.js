import React , { Component } from 'react';


class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageInput: 'en-US',
      languageOutput: 'vi-VN'

    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

handleChange(e){
  let target = e.target;
  let name = target.name;
  let value = target.value;

  this.setState({
    [name] : value
  })

}
handleSubmit(e) {
e.preventDefault()
  this.props.onChange({
    inputSetting: this.state.languageInput,
    outputSetting: this.state.languageOutput})
}



  render() {

console.log('input', this.state.languageInput, 'output', this.state.languageOutput);
    return (
  <form className="form-inline">

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Select your input language</label>
          <select name='languageInput' onChange = {this.handleChange} value = {this.state.languageInput} className="form-control" id="exampleFormControlSelect1">
              <option value='en-US'>English (United States)</option>
              <option value='es-CO'>Español (Colombia)</option>
              <option value='it-IT'>Italiano (Italia)</option>
              <option value='vi-VN'>Việt Nam</option>

          </select>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Select your input language</label>
          <select name='languageOutput' onChange = {this.handleChange} value = {this.state.languageOutput} className="form-control" id="exampleFormControlSelect1">
              <option value='en-US'>English (United States)</option>
              <option value='es-CO'>Español (Colombia)</option>
              <option value='it-IT'>Italiano (Italia)</option>
              <option value='vi-VN'>Việt Nam</option>

          </select>
          <button type='Submit' onClick = {this.handleSubmit}> Submit </button>
        </div>
    </form>
    )



  }
}

export default Setting;
