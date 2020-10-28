// TODO: React to a click on the button!
// Reminder: when clicked, the button should
// 1. Become disabled
// 2. Change text from "Click Me!" to "Bingo!"
// 3. (Optional) Play the 'sound.mp3' that you can find in this exercise's folder

const clickButton = (element) => {
  // 1. Become disabled
  element.disabled = true

  // 2. Change text from "Click Me!" to "Bingo!"
  element.innerText = "Bingo!"

  // 3. (Optional) Play the 'sound.mp3' that you can find in this exercise's folder
  const audio = new Audio('sound.mp3');
  audio.play();
}
