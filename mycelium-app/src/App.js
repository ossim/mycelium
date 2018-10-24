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

class App extends Component {
  constructor(props) {
    super(props);

    // Don't call this.setState() here!
    this.state = {
      textFieldValue: "",
      chapter: 'intro',
      feedItems: []
    };
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  _handleTextFieldChange(e) {
    this.setState({
      textFieldValue: e.target.value
    });
  }

  handleTextInput(e) {
    var newFeedObject = {
      text: e,
      type: 'user'
    }
    var newFeedItems = this.state.feedItems.concat(newFeedObject)
    var responses = this.handleTextResponse(e)
    if (responses != []) {
      for (var response of responses) {
        newFeedItems.push(response)
      }
    }

    this.setState({
      textFieldValue: "",
      feedItems: newFeedItems
    })
  }

  handleTextResponse(e) {
    var responses = []
    console.log("handling intro response", this.state.chapter, e)
    if (this.state.chapter == "intro" && e == "intro") {
      responses.push({
        text: "Fungus grows best in dark, warm, and damp places.",
        type: "user"
      })
      responses.push({
        text: "The symphonic smattering of rain is a stark contrast to the mechanical hum of a single bulb. The tempest hits strong tonight outside the concrete cell, spiteful in the face of the past months of drought. The rain disturbs old dust and old memories in their endless fields.",
        type: "life"
      })
      responses.push({
        text: "A figure lies upon a solitary cot in the middle of the cell illuminated by the bulb. It is immobile, weak. Beside the cot, a metal platter is splayed just out of reach.",
        type: "life"
      })
    }

    else {
      responses.push({
        text: "I don't understand this input. Try examining anything you can see.",
        type: "life"
      })
    }
    return responses
  }


  render() {
    const inputProps = {
      value: this.state.textFieldValue
    };
    if (this.state.feedItems.length == 0) {
      console.log("gotta set")
      this.setState({
        feedItems: this.handleTextResponse('intro')
      })
    }

    console.log(this.state.textFieldValue)

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">

          <div className="scrollerfield">
            <TextFeed
              feedItems={this.state.feedItems}
            />
            <div style={{ float:"left", clear: "both" }}
               ref={(el) => { this.messagesEnd = el; }}>
            </div>
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
