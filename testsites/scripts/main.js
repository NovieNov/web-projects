let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute ('src');
    if(mySrc === 'images/beerus_ultra-instinct.jpg') {
        myImage.setAttribute ('src','images/ultra_instinct.jpg')
    } else {
        myImage.setAttribute ('src','images/beerus_ultra-instinct.jpg')
    }
}