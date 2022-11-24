chrome.action.onClicked.addListener(async (tab) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;

    // Switch to Blocks
    url = url.replace("https://github.com", "https://blocks.githubnext.com");

    // Enable the dev server
    if (!url.includes("?")) {
      url = url + "?";
    }
    url = url + "&devServer=http%3A%2F%2Flocalhost%3A4000%2F";
    chrome.tabs.update(null, {
      url,
    });
  });
});
