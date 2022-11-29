/*global chrome*/

function copyFromLocalToSystem(clipboard) {
  function handler(event) {
    var string = localStorage.getItem(clipboard);
    event.clipboardData.setData('text/plain', string);
    event.preventDefault();
    document.removeEventListener('copy', handler, true);
  }

  document.addEventListener('copy', handler, true);
  document.execCommand('copy');
}

function pasteToLocalFromSystem(clipboard) {
  function handler(event) {
    var text = event.clipboardData.getData('text/plain');
    localStorage.setItem(clipboard, text);
    event.preventDefault();
    document.removeEventListener('paste', handler, true);
  }

  document.addEventListener('paste', handler, true);
  document.execCommand('paste');
}

var clipboard

chrome.commands.onCommand.addListener(async function (command) {
  if (command == 'clipboard1') {
    clipboard = 'c1'
  } else if (command == 'clipboard2') {
    clipboard = 'c2'
  } else if (command == 'clipboard3') {
    clipboard = 'c3'
  } else if (command == 'clipboard4') {
    clipboard = 'c4'
  }
});