const { app, BrowserWindow, ipcMain } = require('electron');

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


	ipcMain.on('hello', (e, args) => {
		console.log( args )
		e.sender.send('hello-response', 'I got you.')
	});

	// mainWindow.webContents.on('did-finish-load', () => {
	// 	mainWindow.webContents.send('caught-you', 'hello client');
	// })

		ipcMain.handle('caught-you', (e, data) => console.log( data ));


});
let mainWindow 
app.on('ready', readyHandler )





