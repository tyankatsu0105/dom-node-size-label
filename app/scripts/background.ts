chrome.browserAction.setBadgeBackgroundColor({
  color: `#34a852`
});

let enableFlag:boolean = false;

chrome.browserAction.onClicked.addListener(function(tab){
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