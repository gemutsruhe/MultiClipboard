function copyFromClipboardToLocal (string) {
    function handler (event){
        event.clipboardData.setData('text/plain', string);
        event.preventDefault();
        document.removeEventListener('copy', handler, true);
        console.log(string)
    }

    document.addEventListener('copy', handler, true);
    document.execCommand('copy');
}

function pasteToLocalFromSystem () {
    function handler (event) {
        var text = event.clipboardData.getData('text/plain');
        event.preventDefault();
        document.removeEventListener('paste', handler, true);
        console.log(text);
    }

    document.addEventListener('paste', handler, true);
    document.execCommand('paste');
}

chrome.commands.onCommand.addListener(async function(command) {
    console.log(`Command "${command}" called`);
    
    if(command == 'copy') {
        pasteToClipboardFromLocal();
    } else if(command == 'paste'){
        copyFromClipboardToLocal('text');
    }
});

window.onload=test();

window.addEventListener('keydown', (event) => {
    console.log('keydown');
});

function test() {
    document.addEventListener('keydown', (event) => {
        console.log('keydown');
    });
}
/*
function noCTRL(e) {
    var code = (document.all) ? event.keyCode:e.which;
    var ctrl = (document.all) ? event.ctrlKey:e.modifiers & Event.CONTROL_MASK;
    var msg = "Ctrl + C / Ctrl + V키를 금지합니다 ";

    if (ctrl && code==86) {//CTRL+V
        alert(msg);
    } else if (ctrl && code==67) { //CTRL+C (Copy)
        alert(msg);
    }
}*/

window.onkeydown = function(){
    console.log('keydown event occur');
    if(event.keyCode == 67 && event.ctrlKey){

        console.log('ccopy');
        
    }
}