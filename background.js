chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    if (tab.url.indexOf("twitter.com/followers") != -1|| (tab.url.indexOf("twitter.com/") != -1 && tab.url.indexOf("/followers") != -1)) { // Inspect whether the place where user clicked matches with our list of URL
        chrome.tabs.executeScript(tab.id, {
            "file": "contentscript.js"
        }, function () { // Execute your code
            console.trace("Script Executed .. "); // Notification on Completion
        });
    } else {
      if (window.confirm('It seems like you are not in your followers page. Click ok to be redirected'))
        {
          chrome.tabs.executeScript(tab.id, {
              "file": "redirect.js"
          }, function () { // Execute your code
              console.trace("Script Executed .. "); // Notification on Completion
          });
        };
    }
});
