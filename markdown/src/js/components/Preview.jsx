'use strict';
import React from 'react';
import marked from 'marked';

let Preview = React.createClass({
  getDefaultProps() {
    return {
      text: ''
    };
  },

  render() {
    return (
      <div className="preview row">
        <div
          className="markdown-body pre"
          dangerouslySetInnerHTML= {{
            __html: marked(this.props.text)
          }}
        />
      </div>
    );
  }
});

export default Preview;
