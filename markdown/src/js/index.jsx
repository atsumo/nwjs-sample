import React from 'react';
import App from './components/App.jsx';

var gui = window.require('nw.gui');

var mb = new gui.Menu({type: 'menubar'});
mb.createMacBuiltin('Markdowner');
gui.Window.get().menu = mb;

React.render(<App />, document.getElementById('app'));
