'use strict';

import React from 'react';
import TextStore from '../stores/TextStore';
import TextAction from '../actions/Text';
import Editor from './Editor.jsx';
import Menu from './Menu.jsx';
import Preview from './Preview.jsx';

export default React.createClass({
  getInitialState() {
    return {
      tasks: []
    };
  },

  _onChange(state) {
    this.setState(state);
  },

  componentDidMount() {
    TextStore.onChange(this._onChange);
  },

  componentWillUnmount() {
    TextStore.removeChangeListener(this._onChange);
  },

  render() {
    let {text} = this.state;
    return (
      <div className="content">
        <Editor />
        <Preview text={text} />
        <Menu />
      </div>
    );
  }

});
