
import React , { Component } from 'react';





class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outputText: []
    }

  }




  componentWillReceiveProps(nextProps) {
    if (nextProps.textInput !==this.props.textInput) {
      this.handleTranslate(nextProps);

    }

}

handleTranslate(nextProps) {
  var length = nextProps.textInput.length;

  var textInput = length === 0?nextProps.textInput[length]:  nextProps.textInput[length-1]

  let fromLang =this.props.languageInput.slice(0,2);
  //JSON.stringify(this.props.languageInput.slice(0,2));
  let toLang =this.props.languageOutput.slice(0,2);
  console.log(this.props.languageOutput.length);
  let text = textInput;
  let test = '';
  const API_KEY = 'AIzaSyC6z3Cc-dZ-TOG2FiUsZjpWul3iHQv-mkc';

  let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
  url += '&q=' + encodeURI(text);
  url += `&source=${fromLang}`;
  url += `&target=${toLang}`;

  fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
  .then(res => res.json())
  .then((response) => {
  console.log(response);
      this.setState({

        outputText:  this.state.outputText.concat(response.data.translations[0].translatedText)
      })


  })
  .catch(error => {
    console.log("There was an error with the translation request: ", error);
  });

}






  render() {

    var items = this.state.outputText;
    var outputHTML = items.map((item, index) => <div key={index} className="container">
          <img src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" alt="Avatar" />
          <p>{item}</p>

        </div>)


    return (
      <div>
      {outputHTML}
      </div >
)

  }
}


export default Translate;
