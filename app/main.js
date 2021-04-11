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

	const success = await mainWindow.loadFile('app/index.html');
	console.log( success )

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
}));


process.on( 'uncaughtException', err => {
	console.log('program is closed suddenly.')
	process.exit(1)
})
