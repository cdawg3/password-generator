const characters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
  "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/",
];

let displayOne = document.getElementById("display1")
let displayTwo = document.getElementById("display2")

function handleGenerate() {
    displayOne.textContent = generatePassword()
    displayTwo.textContent = generatePassword()
}

function generatePassword() {
    const password = [];
    for (let i = 0; i < 16; i++) {
        password.push(randomCharacter()) //instead of declaring a new variable just call the function here
    }
    return password.join("") //this concatenates the items within an array
}

function randomCharacter() {
    // let index = Math.floor(Math.random() * characters.length)
    // return characters[index]
    const array = new Uint32Array(1); //initializing a new array with length of 1
    window.crypto.getRandomValues(array); //storing a random value in the array of length 1
    const index = array[0] % characters.length; //dividing the length of characters by the random value and storign the ramainder
    return characters[index]; //returning the character stored at the index of the character array
}