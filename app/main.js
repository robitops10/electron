const { app, BrowserWindow, webContents, session, dialog } = require('electron');
const windowStateKeeper = require('electron-window-state');

// not working
// app.on('before-quit', (event) => {
// 	event.preventDefaut();
// 	console.log('Waiting to save file')
// })


const catchAsync = fn => (...args) => fn(args).catch(console.log)

const windowState = windowStateKeeper({
	defaultWidth: 800,	
	defaultHeight: 600,	
});


const mainWindowOptions = {
	x: windowState.x,
	y: windowState.y,
	width: windowState.width,
	height: windowState.height,
	minWidth: 400,
	minHeight: 200,

	webPreferences : {
		nodeIntegration: true,
		contextIsolation: false,
	},
};

const childWindowOptions = {
	...mainWindowOptions,

	width: 600,
	height: 400,
	backgroundColor: '#ff0000',
};



const readyHandler = catchAsync(async () => {
	const mainWindow = new BrowserWindow(mainWindowOptions);
	mainWindow.loadFile('app/index.html');
	// mainWindow.webContents.openDevTools()
	// windowState.manage(mainWindow);
	// mainWindow.loadURL('https://httpbin.org/basic-auth/user/passwd');
	// childWindow = new BrowserWindow(childWindowOptions);
/*
	const sec = session.defaultSession;
	sec.on('will-download', (e, downloadItem, webContents) => {

		const filename = downloadItem.getFilename();
		const fileSize = downloadItem.getTotalBytes();

		const setPath = downloadItem.setSavePath(app.getPath('desktop') + '/' + filename);

		downloadItem.on('updated', (e, status) => {
			const received = downloadItem.getReceivedBytes()

			if( status === 'progressing' && received ) {
				const progress = Math.round((received / fileSize ) * 100 )
				console.log( progress )

				webContents.executeJavaScript(`window.progress.value = ${progress}`)
			}
		})
	});

*/



	mainWindow.webContents.on('did-finish-load', catchAsync( async () => {

	// const data =	await dialog.showOpenDialog(mainWindow, {
	// 		title: 'Photo Dialog', 																		// Show Title on the Window
	// 		buttonLabel: 'Select a Photo', 														// Value of Button Default 'Open'
	// 		// defaultPath: app.getPath('home'), 												// Default 'current Directory'
	// 		properties: ['openFile', 'multiSelections'],
	// 		filters: [ 																								// Only allow bellow file types
	// 			{ name: 'image', extensions: ['jpg', 'jpeg', 'png'] }	 	// 'name' will show file type Level
	// 		]
	// 	});
	// console.log( data ) 																					// Promise of { canceled: false, filePaths: ['...'] }


	
	// const data =	await dialog.showSaveDialog(mainWindow, {
	// 		title: 'Save Dialog', 																		// Show Title on the Window
	// 		// buttonLabel: 'Select a Photo', 														// Value of Button Default 'Open'
	// 		// defaultPath: app.getPath('home'), 												// Default 'current Directory'
	// 		// properties: ['showHiddenFiles'],
	// 		// filters: [ 																								// Only allow bellow file types
	// 		// 	{ name: 'image', extensions: ['jpg', 'jpeg', 'png'] }	 	// 'name' will show file type Level
	// 		// ]
	// 	});
	// console.log( data ) 																					// Promise of { canceled: false, filePaths: ['...'] }



	// const data = await dialog.showMessageBox(mainWindow, {
	// 	title: 'window title',
	// 	type: 'question', 			// none|info|warning|error|question							// Show icon image according to type
	// 	message: 'main heading message',
	// 	detail: 'description for the message', 
	// 	buttons: ['yes', 'no', 'cancel'], 													// every item create a button with that text
	// 	defaultId: 1, 																							// Select the button, 0=buttons[0], 1=buttons[1]...
	// 	cancelId: 2, 																								// Esc key to cencel, (default) no|cancel text
	// 	checkboxLabel: 'Accept conditions too', 										// Add check box
	// 	checkboxChecked: true, 																			// Enable the check box
	// 	icon: './../images/60x60.jpg'
	// });
	// console.log( data ) 																					// Promise of { response: 0, checkboxChecked: false }

	const data = await dialog.showErrorBox('title', 'error message')
	console.log( data ) 																						// => undefined


	}));
	




});

let mainWindow, childWindow;
app.on('ready', readyHandler )





process.on( 'uncaughtException', err => {
	console.log('program is closed suddenly.', err)
	process.exit(1)
})
