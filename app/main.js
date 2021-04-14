const { app, BrowserWindow, Menu, MenuItem } = require('electron');
const menu_template = require('./menu_template');


const catchAsync = fn => (...args) => fn(args).catch(console.log)

const readyHandler = catchAsync(async () => {
	const mainWindow = new BrowserWindow();
	mainWindow.loadFile('app/index.html');


	const menu = Menu.buildFromTemplate( menu_template )
	Menu.setApplicationMenu( menu )


});
let mainWindow
app.on('ready', readyHandler )





