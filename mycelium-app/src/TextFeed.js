import React, { Component } from 'react';


class TextFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var itemdivs = []
    for (var item of this.props.feedItems) {
      if (item.type == "user") {
        itemdivs.push(<div className="feeditem"><i>{item.text}</i></div>)
      } else if (item.type == "life") {
        itemdivs.push(<div className="feeditem">{item.text}</div>)
      }
    }

    return (
      itemdivs
    )
  }
}

export default TextFeed
