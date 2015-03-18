'use strict';

import Dispatcher from '../dispatchers';
import BaseStore from './BaseStore';

class TextStore extends BaseStore {
  constructor() {
    super();
  }

  update(text) {
    this.state.text = text;
    this.emitChange();
  }
}

let store = new TextStore();

Dispatcher.updateText.on(text => {
  store.update(text);
});


export default store;
