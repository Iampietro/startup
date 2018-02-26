import Actor from './actor'; 
import Logger from './logger';
import Movie from './movie';

let terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

let social = {

    share(friendName) {
        console.log(friendName + " shares " + this.title);
    },

    like(friendName) {
        console.log(friendName + " likes " + this.title);
    }
}

Object.assign(Movie.prototype, social);

const logger = new Logger();

terminator.addCast(arnold);
terminator.addCast(actors);

terminator.on("play", logger.log);
terminator.on("pause", logger.log);
terminator.on("resume", logger.log);

terminator.play();
terminator.pause();
terminator.resume();

terminator.like("Iampietro Matias");
terminator.share("Iampietro Matias");