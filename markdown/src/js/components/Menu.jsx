'use strict';

import React from 'react';
import TextStore from '../stores/TextStore';

export default React.createClass({
  render() {
    var title = Date.now() + '.md';
    var url = this._createDownLoadUrl(this.props.data);

    return (
      <div className="menu">
        <a href={url} onClick={this._handleSave} title={title} className="btn" download><i className="fa fa-floppy-o"></i></a>
        <a href="" onClick={this._handleLoad}><i className="fa"></i></a>
      </div>
    );
  },
  /**
   * save
   *
   */
  _handleSave() {
  },

  /**
   * load
   * TODO
   */
  _handleLoad() {
  },

  _createDownLoadUrl(data='') {
    let blob = new Blob([data], { 'type' : 'application/text' });
    let url = URL.createObjectURL(blob);

    return url;
  }
});
