let sitemove = document.getElementById("mysite");
let helppage = document.getElementById("help");

sitemove.addEventListener('click',function(){window.open('https://github.com/hole-orig')})
helppage.addEventListener('click',function(){chrome.tabs.create({"url": "help.html" })})