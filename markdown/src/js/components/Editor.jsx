'use strict';

import React from 'react';
import TextAction from '../actions/Text';

let Editor = React.createClass({
  getDefaultProps() {
    return {
      text: 'type some *markdown* here!'
    };
  },

  handleTextChange() {
    let text = this.refs.textarea.getDOMNode().value;
    TextAction.update(text);
  },

  render() {
    return (
      <div className="editor row">
        <textarea ref="textarea" onChange={this.handleTextChange} defaultValue={this.props.text}></textarea>
      </div>
    );
  }
});

module.exports = Editor;
