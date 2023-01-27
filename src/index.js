module.exports = function check(str, bracketsConfig) {
  let openedBrackets = [];
  let closedBrackets = [];
  bracketsConfig.forEach(brackets => {
    openedBrackets.push(brackets[0]);
    closedBrackets.push(brackets[1]);
  });

  function closeOpened(char) {
    if (opened[opened.length - 1] === openedBrackets[closedBrackets.indexOf(char)]) opened.pop();
  }

  let opened = [];

  for (let char of str) {
    if (closedBrackets.includes(char) && opened.includes(openedBrackets[closedBrackets.indexOf(char)])) {
      closeOpened(char);
    } else if (openedBrackets.includes(char)) {
      opened.push(char);
    } else return false;
  }

  return (opened.length) ? false : true;
}
