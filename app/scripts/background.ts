// ======================================
// Extension settings
// ======================================
chrome.browserAction.setBadgeBackgroundColor({
  color: `#34a852`
});

// ======================================
// Variables
// ======================================
let enableFlag:boolean = false;
let previousUrl:string | undefined;

// ======================================
// Actions
// ======================================

// ----------------------
// When Click extension icon
// ----------------------
chrome.browserAction.onClicked.addListener(tab =>{
  if(tab.id !== undefined) {
    if(enableFlag === false) {
      enableFlag = true;
      chrome.tabs.sendMessage(tab.id, "enable");
      chrome.browserAction.setBadgeText({
        text: `ON`
      });
      return;
    }
    if(enableFlag === true) {
      enableFlag = false;
      chrome.tabs.sendMessage(tab.id, "disable");
      chrome.browserAction.setBadgeText({
        text: ``
      });
      return;
    }
  }
});

// ----------------------
// When page transition
// ----------------------
chrome.tabs.onUpdated.addListener((tabId, _changeInfo, tab) => {
  const nextUrl = tab.url
  chrome.browserAction.getBadgeText({}, result => {
    if(result === 'ON'){
      chrome.tabs.sendMessage(tabId, "enable");
    }
});
  
  if(previousUrl !== nextUrl && enableFlag === true){
    chrome.tabs.sendMessage(tabId, "enable");
    previousUrl = nextUrl;
  }
});