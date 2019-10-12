const listItem = content => `<li class="list-group-item">${content}</li>`;

const unorderedList = (items) => {
  const content = items.map(item => listItem(item)).join('\n  ');
  return `<ul class="list-group">${content}</ul>`;
};

module.exports = { listItem, unorderedList }; // Do not remove.
