import React, { Component } from 'react';


class TextFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var itemdivs = []
    for (var item of this.props.feeditems) {
      itemdivs.push(<div className="feeditem">{item}</div>)
    }

    return (
      itemdivs
    )
  }
}

export default TextFeed
