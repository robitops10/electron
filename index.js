const fun = f => console.log(f);

// const thatFun = fun.bind(null, 'hello'); 				
// setTimeout( thatFun, 1000 )

// setTimeout( fun , 500 ) 											// no way to pass argument
// setTimeout( () => fun('hello') , 500 ) 				// to pass args, need an extra callback wraper

// setTimeout( fun.bind(null, 'hello'), 1000 ) 		// no need any extra wraper to pass args


const fun2 = () => fun('hello');
setTimeout( fun2 , 500 ) 											// no way to pass argument
