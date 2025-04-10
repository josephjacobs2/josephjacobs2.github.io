/*
gameData = {
    game1: {
        title: "Plumber Man",
        developer: "Unintendoed",
        price: 59.99,
        image: "../Assets/PlumberMan.png"
    },
    game2: {
        title: "The Story of Jerry",
        developer: "Unintendoed",
        price: 59.98,
        image: "../Assets/TheStoryOfJerry.png"
    },
    game3: {
        title: "Holdablecreatures",
        developer: "PlayableExperiencesWeirdos",
        price: 60.01,
        image: "../Assets/Holdablecreatures.png"
    }
}
I know I should remove this, but I'm keeping it here as reference for a what the JSON looks like as a non-string
 */

class GameData {
    #title;
    #developer;
    #price;
    #image;

    get title() {
        return this.#title;
    }
    get developer() {
        return this.#developer;
    }
    get price() {
        return this.#price;
    }
    get image() {
        return this.#image;
    }

    set title(newTitle) {
        this.#title = newTitle;
    }
    set developer(newDeveloper) {
        this.#developer = newDeveloper;
    }
    set price(newPrice) {
        if (newPrice < 0)
            newPrice = 0;
        this.#price = newPrice;
    }
    set image(newImage) {
        this.#image = newImage;
    }

    toString() {
        return `Title: ${this.#title}, Developer: ${this.#developer}, Price: ${this.#price}`;
    }

    toHTML() {
        let divider = document.createElement("div");
        let image = document.createElement("img");
        let textContent = document.createElement("span");
        image.src = this.#image;
        divider.appendChild(image);
        textContent.innerHTML =  this.#title + ", Developed by: " + this.#developer + ", Price: $" + this.#price;
        divider.appendChild(textContent);
        return divider;
    }
}

let retrievedData = "{\"game1\":{\"title\":\"Plumber Man\",\"developer\":\"Unintendoed\",\"price\":59.99,\"image\":\"../Assets/PlumberMan.png\"},\"game2\":{\"title\":\"The Story of Jerry\",\"developer\":\"Unintendoed\",\"price\":59.98,\"image\":\"../Assets/TheStoryOfJerry.png\"},\"game3\":{\"title\":\"Holdablecreatures\",\"developer\":\"PlayableExperiencesWeirdos\",\"price\":60.01,\"image\":\"../Assets/Holdablecreatures.png\"}}";
let parsedData = JSON.parse(retrievedData);

let Game1 = new GameData();
Game1.title = parsedData.game1.title;
Game1.developer = parsedData.game1.developer;
Game1.price = parsedData.game1.price;
Game1.image = parsedData.game1.image;

let Game2 = new GameData();
Game2.title = parsedData.game2.title;
Game2.developer = parsedData.game2.developer;
Game2.price = parsedData.game2.price;
Game2.image = parsedData.game2.image;

let Game3 = new GameData();
Game3.title = parsedData.game3.title;
Game3.developer = parsedData.game3.developer;
Game3.price = parsedData.game3.price;
Game3.image = parsedData.game3.image;

document.getElementById("gameContainer").appendChild(Game1.toHTML());
document.getElementById("gameContainer").appendChild(Game2.toHTML());
document.getElementById("gameContainer").appendChild(Game3.toHTML());