//发布订阅类

class EventEmitter {
  constructor() {
    this._events = Object.create(null);
  }

  on(type, handler) {
    (this._events[type] || (this._events[type] = [])).push(handler);
  }

  off(type, handler) {
    if (this._events[type]) {
      this._events[type].filter(index => index !== handler);
    }
  }

  once(type, handler) {
    let fire = false;

    function magic() {
      this.off(type, magic);

      if (!fire) {
        fire = true;
        handler.apply(this, arguments);
      }
    }

    this.on(type, magic);
  }

  emit(type) {
    let params = [...arguments].slice(1);
    if (this._events[type]) {
      this._events[type].forEach(handler => {
        handler.apply(this, params);
      });
    }
  }
}


export default EventEmitter;