const $stage = document.getElementById('stage');
const $pelota = document.getElementById('pelota')
let x = 0
let y = 0

document.addEventListener('keydown', e => {

  console.log(e.key);
  switch (e.key) {
    case "ArrowUp":
      y--
      e.preventDefault()
      break;
    case "ArrowDown":
      y++
      e.preventDefault()
      break;
    case "ArrowLeft":
      x--
      e.preventDefault()
      break;
    case "ArrowRight":
      x++
      e.preventDefault()
      break;

    default:
      break;
  }

  $pelota.style.transform = `translate(${x * 10}px, ${y * 10}px)`
})