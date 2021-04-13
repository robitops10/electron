const { app, BrowserWindow, webContents, session } = require('electron');
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


	})




	// mainWindow.webContents.on('did-finish-load', catchAsync( async (event) => {
	// 	const { cookies } = session.defaultSession;
	// 	const listsOfCookies = await cookies.get({})
	// 	console.log( listsOfCookies )
	// }));




});

let mainWindow, childWindow;
app.on('ready', readyHandler )





process.on( 'uncaughtException', err => {
	console.log('program is closed suddenly.', err)
	process.exit(1)
})
