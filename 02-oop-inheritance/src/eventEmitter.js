module.exports = class EventEmitter {

    constructor() {
        this.events = [];
    }

    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(callback){
                callback(eventName);
            });
        }
    }

    off(event, givenCallback) { /* since the method recives the callback,
                                             we delete just that, instead of the whole event */
        if (this.events[event]) {
            let index = this.events[event].indexOf(givenCallback);
            if (index !== -1) {
                this.events[event].splice(index,1);
            }
        }
    }
}