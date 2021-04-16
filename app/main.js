const { app, BrowserWindow, Tray, ipcMain } = require('electron');
const path = require('path');

const browserOptions = {
	webPreferences: {
		nodeIntegration: true, 								// Enable Node in Client Side too. 		
		contextIsolation: false, 			
		enableRemoteModule: true, 						// Enable remote module { don't do this if have security issue }
	}
};

const catchAsync = fn => (...args) => fn(args).catch(console.log)

const readyHandler = catchAsync(async () => {
	const mainWindow = new BrowserWindow(browserOptions);
	mainWindow.loadFile('app/index.html');
	mainWindow.webContents.openDevTools();



});
let mainWindow 
app.on('ready', readyHandler )





