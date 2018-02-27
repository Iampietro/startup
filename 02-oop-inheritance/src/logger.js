class Logger { 

    constructor() {}

    log(info) {
        console.log("The event: '" +info+ "' has been triggered!");
    }
}

module.exports = Logger;