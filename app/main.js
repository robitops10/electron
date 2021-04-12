const { app, BrowserWindow } = require('electron');



const catchAsync = fn => (...args) => fn(args).catch(console.log)


let mainWindow = null;
app.on('ready', catchAsync( async () => {

	const mainWindow = new BrowserWindow({
		webPreferences : {
			nodeIntegration: true,
			contextIsolation: false,
		}
	});
	mainWindow.webContents.openDevTools()

	const success = await mainWindow.loadFile('app/index.html');
	console.log( success )

	mainWindow.on('closed', () => {
		mainWindow = null;
	});

}));

// app.on('before-quit', (event) => {
// 	event.preventDefaut();
// 	console.log('Waiting to save file')
// })


process.on( 'uncaughtException', err => {
	console.log('program is closed suddenly.')
	process.exit(1)
})
