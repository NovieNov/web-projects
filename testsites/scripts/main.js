let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute ('src');
    if(mySrc === 'images/beerus_ultra-instinct.jpg') {
        myImage.setAttribute ('src','images/ultra_instinct.jpg')
    } else {
        myImage.setAttribute ('src','images/beerus_ultra-instinct.jpg')
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt ('please enter your username');
    localStorage.setItem ('name', myName);
    myHeading.textContent = 'My journey buliding websites, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'My journey building websites, ' + storedName;
}
myButton.onclick = function() {
    setUserName()
}
function setUserName() {
    let myName = prompt('please enter your name');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'My journey building websites, ' + myName;
    }
}