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


class Movie extends EventEmitter{

    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.actors = [];
    }

    play() {
        this.emit("play");
    }

    pause() {
        this.emit("pause");
    }

    resume() {
        this.emit("resume");
    }

    addCast(cast){
        if (cast instanceof Array) {
            for (let i = 0; i < cast.length ; i++) {
                this.actors.push(cast[i]);
            }
        } else {
            this.actors.push(cast);
        }
    }
}

class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Logger { 

    constructor() {}

    log(info) {
        console.log("The event: '" +info+ "' has been triggered!");
    }
}

let terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
const logger = new Logger();

terminator.addCast(arnold);
terminator.addCast(actors);

terminator.on("play", logger.log);
terminator.on("pause", logger.log);
terminator.on("resume", logger.log);

terminator.play();
terminator.pause();
terminator.resume();

let social = {

    share(friendName) {
        console.log(friendName + " shares " + this.title);
    },

    like(friendName) {
        console.log(friendName + " likes " + this.title);
    }
}

Object.assign(Movie.prototype, social);

terminator.like("Iampietro Matias");
terminator.share("Iampietro Matias");