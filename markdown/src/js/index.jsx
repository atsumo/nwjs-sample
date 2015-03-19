import React from 'react';
import App from './components/App.jsx';
import {gui} from 'nw.gui';

if (process.platform === "darwin") {
  var mb = new gui.Menu({type: 'menubar'});
  mb.createMacBuiltin('RoboPaint', {
    hideEdit: false,
  });
  gui.Window.get().menu = mb;
}

React.render(<App />, document.getElementById('app'));
