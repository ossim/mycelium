import React, { Component } from 'react';


class TextFeed extends Component {
  render() {
    var itemdivs = []
    for (var item of this.props.feedItems) {
      if (item.type == "user") {
        itemdivs.push(<div className="feeditem"><i>{item.text}</i></div>)
      } else if (item.type == "life") {
        itemdivs.push(<div className="feeditem">{item.text}</div>)
      } else if (item.type == "dream1") {
        itemdivs.push(<div className="feeditem dream1">{item.text}</div>)
      } else if (item.type == "dream2") {
        itemdivs.push(<div className="feeditem dream2">{item.text}</div>)
      } else if (item.type == "dream3") {
        itemdivs.push(<div className="feeditem dream3">{item.text}</div>)
      } else if (item.type == "dream4") {
        itemdivs.push(<div className="feeditem dream4">{item.text}</div>)
      } else if (item.type == "dream5") {
        itemdivs.push(<div className="feeditem dream5">{item.text}</div>)
      }
    }

    return (
      itemdivs
    )
  }
}

export default TextFeed
