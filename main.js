browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    if (tabs.length === 1) {
      browser.tabs.remove(tabs[0].id);
    }
  });
  