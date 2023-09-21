// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

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
return appendCat = [...cats, name];
}

function prependCat(name) {
    return prependCat = [name, ...cats];
}

function removeLastCat() {
    let newArray = cats.slice(0, cats.length - 1)
    return newArray;
}

function removeFirstCat() {
    let moreArrays = cats.slice(1, cats.length);
    return moreArrays;
}