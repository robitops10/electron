const { nativeImage } = require('electron')
const $ = (selector) => document.querySelector(selector);


const saveToDesktop = (buffer, ext) => {
	const fs = require('fs');
	const file = '/home/riajul/Desktop/file.' + ext;

	fs.writeFile(file, buffer, 'utf8', console.log)
};


const image = '/usr/share//backgrounds/linuxmint/ktee_linuxmint.png';
const buf = nativeImage.createFromPath(image)

// $('#btn').addEventListener('click', () => {
// 	const raster = buf.toJPEG(100);
// 	saveToDesktop(raster, 'jpg'); 								// pass data to function
// });

// $('#btn').addEventListener('click', () => {
// 	const raster = buf.toPNG();
// 	saveToDesktop(raster, 'png'); 		
// });


// $('#btn').addEventListener('click', () => {
// 	const raster = buf.toDataURL();
// 	$('#imgTag').src = raster;
// });

// $('#btn').addEventListener('click', () => {
// 	const raster = buf.resize({width: 250, height: 200, quality: 'good'}).toDataURL();
// 	$('#imgTag').src = raster;
// });

$('#btn').addEventListener('click', () => {
	const raster = buf
		.resize({width: 250, height: 200, quality: 'good'})
		.toDataURL();
	$('#imgTag').src = raster;
});




