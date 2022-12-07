/*global chrome*/
import { useBoardStore } from '../Content/modules/zustand';

const { getState, setState, subscribe, destroy } = useBoardStore;

const clipboard1 = getState().clipboard1;

const setClipboard1 = getState().setClipboard1;

console.log(getState());

var selectedClipboard = 'c0';
var prevData;

function pasteToLocalFromSystem(clipboard) {
  navigator.clipboard.readText().then(text => {
    localStorage.setItem(clipboard, text);
    prevData = text;
    alert('시스템 클립보드 -> 크롬 저장소 복사 완료!\n데이터 ' + text + ' 복사');
  })
}

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (selectedClipboard != 'c0') {
      navigator.clipboard.writeText(prevData);
      alert('크롬 저장소 ' + selectedClipboard + '선택 해제\n이전 시스템 클립보드 데이터 ' + prevData + ' 복원 완료');
      selectedClipboard = 'c0';
    } else {
      if (request.message == 'c1') selectedClipboard = 'c1';
      else if (request.message == 'c2') selectedClipboard = 'c2';
      else if (request.message == 'c3') selectedClipboard = 'c3';
      else if (request.message == 'c4') selectedClipboard = 'c4';

      var loadText = localStorage.getItem(selectedClipboard);
      navigator.clipboard.readText().then(text => {
        prevData = text;
      })
      navigator.clipboard.writeText(loadText);
      alert('크롬 저장소 -> 시스템 클립보드 붙여넣기 완료\n크롬 저장소 ' + selectedClipboard + ' 선택 완료\n크롬 저장소 데이터 ' + loadText + ' 불러오기 완료');
    }
  }
);

window.addEventListener('keydown', e => {
  switch (selectedClipboard) {
    case 'c1':
    case 'c2':
    case 'c3':
    case 'c4':
      if (e.ctrlKey == true && e.key == 'c') {
        pasteToLocalFromSystem(selectedClipboard);
        selectedClipboard = 'c0'
      } else if (e.ctrlKey == true && e.key == 'v') {
        var clipboardNum = selectedClipboard;
        navigator.clipboard.readText().then(text => {
          alert('클립보드 ' + clipboardNum + ' 데이터 ' + text + ' 붙여넣기 완료')
        })
        selectedClipboard = 'c0'
      }
  }
});