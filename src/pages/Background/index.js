/*global chrome*/

var clipboard;

chrome.commands.onCommand.addListener(async function (command) {
  console.log(command);
  if (command == 'clipboard1') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          message: 'c1'
        },
        function (response) { }
      );
    });
  } else if (command == 'clipboard2') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          message: 'c2'
        },
        function (response) { }
      );
    });
  } else if (command == 'clipboard3') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          message: 'c3'
        },
        function (response) { }
      );
    });
  } else if (command == 'clipboard4') {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          message: 'c4'
        },
        function (response) { }
      );
    });
  }
});
