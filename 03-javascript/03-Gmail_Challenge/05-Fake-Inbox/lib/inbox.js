const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
};

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
};

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
};

// TODO: Make each email clickable, to change it's status to read/unread













// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 2000); // Every 2 seconds, the `refresh` function is called.
});

