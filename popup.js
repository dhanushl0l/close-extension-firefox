browser.windows.getCurrent().then((windowInfo) => {
    browser.windows.remove(windowInfo.id);
  });
