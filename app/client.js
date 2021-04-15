const { ipcRenderer } = require('electron')
const $ = (selector) => document.querySelector(selector);

const sendData = () => {
	ipcRenderer.send('hello', 'Hello Server')
};

const getData = () => {
	ipcRenderer.on('replay', (e) => {
		console.log( e )
	})
};

ipcRenderer.on('hello-response', (e, data) => {
	console.log(data)
})

// ipcRenderer.on('caught-you', (e, data) => {
// 	console.log( data )
// })

ipcRenderer.invoke('caught-you', 'hello');

$('#sendData').addEventListener('click', sendData );
$('#getData').addEventListener('click', getData );




