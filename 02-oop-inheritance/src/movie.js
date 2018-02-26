require("babel-register");
import Emitter from './eventEmitter';

class Movie extends Emitter{

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

export default Movie;

