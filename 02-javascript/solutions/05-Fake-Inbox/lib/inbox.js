/* eslint-disable no-multiple-empty-lines */

const hasNewMessage = () => Math.random() < 0.2;

const sample = array => array[Math.floor(Math.random() * array.length)];

const newMessage = () => {
  const senders = ['GitHub', 'Le Wagon', 'Google', 'Apple'];
  const subjects = ['You Got Mail!', 'Welcome!', 'You won\'t believe it...', 'Past due invoice'];

  return {
    sender: sample(senders),
    subject: sample(subjects)
  };
};

const appendMessageToDom = (message) => {
  const line = `<div class= "row message unread">
    <div class="col-xs-3">${message.sender}</div>
    <div class="col-xs-9">${message.subject}</div>
  </div>`;
  document.getElementById('inbox').insertAdjacentHTML('afterbegin', line);
  const insertedMsg = document.querySelector('.message');
};

const updateUnreadCount = () => {
  const unreadCount = document.querySelectorAll('.message.unread').length;
  document.getElementById('count').innerText = `(${unreadCount})`;
  document.title = `(${unreadCount}) Fake Inbox`;
};

const refresh = () => {
  if (hasNewMessage()) {
    appendMessageToDom(newMessage());
    updateUnreadCount();
  }
};
















// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
