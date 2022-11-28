document.addEventListener("copy", (() => {
    const UQ = window.location.href,
        Fx = document.title;
    chrome.extension.sendMessage({
        href: UQ,
        title: Fx
    })
}));