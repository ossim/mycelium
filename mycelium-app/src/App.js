import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import TextFeed from './TextFeed.js'
import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
   "fontFamily": "\"Cormorant\", serif",
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

let chapter = "intro"
let text = []


class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      textFieldValue: "",
      feeditems: new Array(),
    };
  }

  _handleTextFieldChange(e) {
    this.setState({
      textFieldValue: e.target.value
    });
  }

  handleTextInput(e) {
    var newfeeditems = this.state.feeditems.concat(e)
    this.setState({
      textFieldValue: "",
      feeditems: newfeeditems
    })
  }

  render() {
    const inputProps = {
      value: this.state.textFieldValue
    };

    console.log(this.state.textFieldValue)

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">

          <div className="scrollerfield">
            <TextFeed
              feeditems={this.state.feeditems}
            />
          </div>

          <div className="enterfield">
            <TextField
              onKeyPress={(ev) => {
                console.log(`Pressed keyCode ${ev.key}`);
                if (ev.key === 'Enter') {
                  // Do code here
                  this.handleTextInput(this.state.textFieldValue);
                  ev.preventDefault();
                }
              }}
              id="text_enter"
              placeholder="What to do..."
              onChange={this._handleTextFieldChange.bind(this)}
              inputProps={inputProps}
              fullWidth
              margin="normal"
            />
          </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
