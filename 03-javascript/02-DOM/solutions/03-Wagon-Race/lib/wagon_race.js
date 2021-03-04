// TODO: Write your wagon race logic here
const driveWagon = (event) => {
  // 1. Get the key from the event
  const keyPressed = event.key

  // 2. Check if the right key is pressed
  if (keyPressed === "ArrowRight") {

    // 3. Get the current position of the wagon
    const wagon = document.querySelector('td.active')

    // 4. Remove the active class from current cell
    wagon.classList.remove('active')

    // 5. Add it on the next sibling element
    wagon.nextElementSibling.classList.add('active')

    // 6. Check for the winning condition - to be clean, let's make it into another method!
    checkWinner(wagon)
  }
}

const checkWinner = (wagon) => {
  if (wagon.nextElementSibling.classList.contains('finish')) {
    // Let's insert the wagon into the finish cell
    const finishLine = document.querySelector('.finish')
    finishLine.innerHTML = '<img src="images/player_1.png" width=40 alt="player_wagon">'

    // Let's add a congratulation message at the top!
    const header = document.querySelector('h1')
    header.innerText = "Congratulations! You finished the Wagon Race 🎉"
  }

}
