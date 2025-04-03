
document.getElementById("todoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let innerContent = document.getElementById("addItem").value
    document.getElementById("addItem").value = "";
    if (localStorage.getItem("storedList") === null) {
        localStorage.setItem("storedList", "{}");
    }
    let theObject = JSON.parse(localStorage.getItem("storedList"));
    console.log(theObject);
    if (localStorage.getItem("counter") === null) {
        localStorage.setItem("counter", "0");
    }
    let namey = "listItem";
    namey += localStorage.getItem("counter");
    localStorage.setItem("counter", `${parseInt(localStorage.getItem("counter")) + 1}`);
    console.log(localStorage.getItem("counter"));
    theObject[namey] = innerContent;
    localStorage.setItem("storedList", JSON.stringify(theObject));
    if (sessionStorage.getItem("interactionCounter") === null) {
        sessionStorage.setItem("interactionCounter", "0");
    }
    sessionStorage.setItem("interactionCounter", `${parseInt(sessionStorage.getItem("interactionCounter")) + 1}`)
    updateList();
});

window.addEventListener("load", function(event) {
    updateList();
    applyTheme();
})

function updateList() {
    let theObject = JSON.parse(localStorage.getItem("storedList"));

    let list = document.createElement("ul");
    for (let thing in theObject) {
        let listItem = document.createElement("li");
        listItem.innerHTML = theObject[thing] + "\t";
        let button = document.createElement("button");
        button.innerText = "x";
        button.setAttribute("data-obj", thing)
        button.onclick = removeItem;
        listItem.appendChild(button);
        list.appendChild(listItem);
    }
    document.getElementById("listArea").innerHTML = "";
    document.getElementById("listArea").appendChild(list);

    if (sessionStorage.getItem("interactionCounter") === null) {
        sessionStorage.setItem("interactionCounter", "0");
    }
    document.getElementById("sessionCounter").innerHTML = "Total interactions: " + sessionStorage.getItem("interactionCounter");
}

function removeItem() {
    const namey = this.getAttribute("data-obj")
    let storage = JSON.parse(localStorage.getItem("storedList"));
    delete storage[namey];
    localStorage.setItem("storedList", JSON.stringify(storage));
    sessionStorage.setItem("interactionCounter", `${parseInt(sessionStorage.getItem("interactionCounter")) + 1}`)
    updateList();
}

function changeTheme() {
    let currentTheme;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; ++i) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith('theme='))
            currentTheme = cookie.substring("theme".length + 1);
    }

    if (currentTheme === "light") {
        currentTheme = "dark";
    }
    else {
        currentTheme = "light";
    }

    let date = new Date();
    date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = "theme=" + currentTheme + "; " + expires + "; path=/";

    applyTheme()
}

function applyTheme() {
    if (document.cookie === "") {
        let date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = "theme=light; " + expires + "; path=/";
    }

    let currentTheme;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; ++i) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith('theme='))
            currentTheme = cookie.substring("theme".length + 1);
    }

    if (currentTheme === "light") {
        document.querySelector("body").style.color = "black";
        document.querySelector("body").style.backgroundColor = "white";
    }

    if (currentTheme === "dark") {
        document.querySelector("body").style.color = "white";
        document.querySelector("body").style.backgroundColor = "black";
    }
}

async function getJoke() {
    try {
        let response = await fetch('https://official-joke-api.appspot.com/random_joke');
        let data = await response.json();
        let output = "";
        output += `${data.setup}<br>${data.punchline}`;
        document.getElementById("jokeSection").innerHTML = output;
    } catch (error) {
        document.getElementById("jokeSection").innerHTML = "An error has occurred: " + error;
    }
}

getJoke();