class EventEmitter {

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

    off(event, givenCallback) {
        // If the given event exists
        if (this.events[event]) {
            delete this.events[event];
        }
    }
}


class Movie {

    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play() {
        console.log("You are reproducing: " + this.title);
    }

    pause() {
        console.log("You stopped the movie");
    }

    resume() {
        console.log("pop corn is ready");
    }
}

class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}