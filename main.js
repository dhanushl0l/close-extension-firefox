browser.action.onClicked.addListener(() => {
    browser.windows.getCurrent().then((windowInfo) => {
      const windowId = windowInfo.id;
      browser.windows.remove(windowId);
    });
  });
  