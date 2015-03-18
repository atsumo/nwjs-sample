'use strict';

import events from 'events';
let emitter = new events.EventEmitter();

['updateText'].map(name => {
  let dispatch = function() {
    //letはfunctionの内部のみで使える変数の定義方法
    let args = Array.prototype.slice.apply(arguments);
    args.unshift(name);
    emitter.emit.apply(emitter, args);
  };

  dispatch.on = handler => {
    emitter.on(name, handler);
  };

  dispatch.off = handler => {
    emitter.off(name, handler);
  };

  exports[name] = dispatch;
});
