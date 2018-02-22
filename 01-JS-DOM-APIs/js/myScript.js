document.getElementById("btn-joke").addEventListener("click", getJokeWithConfig);
document.getElementById("btn-repos").addEventListener("click", getRepositories);
document.getElementById("btn-search").addEventListener("click", searchRepositories);

function printError() {
    document.getElementById("error").style.color = "red";
    document.getElementById("error").style.display = "block";
    document.getElementById("error").style.visibility = "visible";
}

function getJoke() {
    const request = new XMLHttpRequest();
    request.open("GET", "http://api.icndb.com/jokes/random", true);

    request.onload = function () {
        const containsTheJoke = JSON.parse(request.responseText);
        if (document.getElementById("error").style.visibility == "visible") {
            document.getElementById("error").style.visibility = "hidden";
        }
        document.getElementById("writable").innerHTML = containsTheJoke.value.joke;
    }

    request.onerror = function() {
        printError();
    }
    
    request.send();
    
}

function ajaxCall(configObj) {
    const getReposAsync = new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        request.open(configObj.method, configObj.url, configObj.async);

        request.onload = function() {
            if (request.readyState == 4 && request.status == 200) {
                resolve(request);
            } else {
                reject();
            }
        }

        request.onerror = function() {
            printError();
        }

        request.send();
    });

    return getReposAsync;
}

function getJokeWithConfig() {
    const config = {
        url: 'http://api.icndb.com/jokes/random',
        method: 'GET',
        async: true
    }

    function resolve() {
        const containsTheJoke = JSON.parse(event.target.response);
        if (document.getElementById("error").style.visibility == "visible") {
            document.getElementById("error").style.visibility = "hidden";
        }
        document.getElementById("writable").innerHTML = containsTheJoke.value.joke;
    }

    function reject() {
        printError();
    }

    ajaxCall(config).then(resolve, reject);
}

function getRepositories() {
    setCursorLoading();
    const request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/search/repositories?q=javascript", true);

    request.onload = function() {
        const data = JSON.parse(request.responseText);
        const list = document.getElementById("repos");

        while(list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }

        for (let i = 0; i < data.items.length; i++) {
            let obj = data.items[i]; 

            const child = document.createElement("li");
            child.className = "forLi";
            const header = document.createElement("h3");
            header.style.display = "inline";
            const headerData = document.createTextNode(obj.full_name);


            const avatar = document.createElement("img");
            avatar.src = obj.owner.avatar_url;
            avatar.setAttribute("height", "60");
            avatar.setAttribute("width", "60");
            avatar.setAttribute("alt", "Owner's Avatar");
            avatar.className = "forAvatars";

            header.appendChild(headerData);
            child.appendChild(header);
            const repos = document.getElementById("repos").appendChild(child);
            child.appendChild(avatar);
        }
        setCursorDefault();
    }

    request.send();
}

function searchRepositories(e) {
    e.preventDefault();
    setCursorLoading();
    const searchTerm = document.getElementById("input-repo").value;

    const request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/search/repositories?q=" + searchTerm, true);

    request.onload = function() {
        const data = JSON.parse(request.responseText);
        const list = document.getElementById("repos");

        while(list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }

        for (let i = 0; i < data.items.length; i++) {
            let obj = data.items[i]; 

            const child = document.createElement("li");
            child.className = "forLi";
            const header = document.createElement("h3");
            header.style.display = "inline";
            const headerData = document.createTextNode(obj.full_name);


            const avatar = document.createElement("img");
            avatar.src = obj.owner.avatar_url;
            avatar.setAttribute("height", "60");
            avatar.setAttribute("width", "60");
            avatar.setAttribute("alt", "Owner Avatar");
            avatar.className = "forAvatars";

            header.appendChild(headerData);
            child.appendChild(header);
            const repos = document.getElementById("repos").appendChild(child);
            child.appendChild(avatar);
        }
        setCursorDefault();
    }

    request.send();
}

function setCursorLoading() {
    const cursor = document.getElementsByTagName("body")[0];
    cursor.style.cursor = "progress";
}

function setCursorDefault() {
    const cursor = document.getElementsByTagName("body")[0];
    cursor.style.cursor = "default";
}
