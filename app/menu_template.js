module.exports = [
	{
		label: 'Electron',
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
		label: 'Action',
		submenu: [
			{ label: 'menu 1' },
			{ 
				label: 'menu 2', 
				submenu: [
					{
						'label' : 'submenu 1'
					}
				] 
			},
		]	
	}
];
