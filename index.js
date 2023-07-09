// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats.slice(), name];
    return newCats;
}

function appendCat(name) {
    const newCats = [...cats.slice(), name];
    return newCats;
}

function prependCat(name) {
    const moreCats = [name, ...cats];
    return moreCats;
}

function removeLastCat() {
    const evenMoreCats = [...cats.slice(0, cats.length - 1)];
    return evenMoreCats;
}

function removeFirstCat() {
    const wowMoreCats = [...cats.slice(1)];
    return wowMoreCats;
}