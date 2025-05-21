window.onload = function() {
const images = [
  "Bilder/framBild.png",
  "Bilder/bröllopsbild.png",
  "Bilder/gruppbild.png",
  "Bilder/båt.png"
]

let currentIndex = 0;
const imageElement = document.getElementById("startPic")

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length
  imageElement.src = images[currentIndex]
}

setInterval(changeImage, 2000)
}