class EventEmmiter {
  constructor() {
    this.events = {};
  }

  on(type, fuc) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(fuc);
  }

  off(type, fuc) {
    if (this.events[type]) {
      this.events[type].filter(cb => cb !== fuc);
    }
  }

  once(type, fuc) {
    let run = false;
    function magic() {
      this.off(type, fuc);

      if (!run) {
        run = true;
        fuc.apply(this, arguments);
      }
    }

    on(type, magic);
  }

  emit(type) {
    let args = [].slice.call(arguments, 1);
    if (this.events[type]) {
      this.events[type].forEach(cb => {
        cb.apply(this, args);
      });
    }
  }
}
