
function mySource(info, tab){
    console.log("Clicked on page:", info, tab)
}

function myImageClick(info,tab){
    console.log("Clicked an image",info,tab)
}
chrome.contextMenus.create({
    "title": "Source",
    "contexts": ["page"],
    "onclick": mySource
})
chrome.contextMenus.create({
    "title": "Share image",
    "contexts": ["image"],
    "onclick": myImageClick
})