module.exports = [
	{
		label: 'Custom',
		submenu: [
				{ label: 'menu 1' },
				{	label: 'menu 2', 
					submenu: [
						{ label: 'submenu 1' },
						{ label: 'submenu 2' },
					] 
				}
		]	
	},
	{
		role: 'editMenu' 																					// Create Edit Menu, by default
	},
	{
		label: 'Action',
		submenu: [
			{ label: 'menu 1', enabled: false },
			{ 
				label: 'menu 2', 
				submenu: [
					{
						label : 'show in console ',
						click: () => console.log('Hello electron'),
						accelerator: 'Alt+Shift+G'
					}
				] 
			},
			{ label: 'devTools', role: 'toggleDevTools' },
			{ role: 'toggleFullScreen' }, 													// create Toggle Full Screen (F1) by default.
			{ role: 'about' },
		]	
	},
	{
		role: 'appMenu'
	}
];
