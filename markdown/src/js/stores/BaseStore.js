import events from 'events';

/**
 * Base class for Store
 */
class BaseStore extends events.EventEmitter {
  /**
   * constructor
   *
   */
  constructor() {
    super();
    this.state = {};
  }

  /**
   * Emit
   */
  emitChange() {
    console.log('Emit change', this.constructor.name, this.state);
    this.emit('change', this.state);
  }

  /**
   * Register change listener function
   */
  onChange(handler) {
    this.on('change', handler);
  }

  removeChangeListener(handler) {
    this.removeListener('change', handler);
  }
}

export default BaseStore;
