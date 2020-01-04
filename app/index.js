const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
    
  // Create the window
  let win = new BrowserWindow({
    width: 700,
    height: 800,
    useContentSize: true,
    minWidth: 540,
    minHeight: 540,
    icon: 'src/favicon.ico',
    backgroundColor: '#faf8ef',
    webPreferences: {
      devTools: process.argv.includes('--debug'),
      webgl: false
    }
  });

  win.loadFile('src/index.html');

})