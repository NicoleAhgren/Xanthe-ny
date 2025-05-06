document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.image-track')
  let position = 0
  const speed = 0.5 // Ändra för mjukare/snabbare rörelse

  function moveImages() {
    position -= speed;
    if (Math.abs(position) >= track.offsetWidth / 2) {
      position = 0 // Återställ när halva bildsatsen har gått
    }
    track.style.transform = `translateX(${position}px)`
    requestAnimationFrame(moveImages)
  }

  moveImages() // Starta animationen
})