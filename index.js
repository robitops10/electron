const fun = f => console.log(f);

const thatFun = fun.bind(null, 'hello');
thatFun() 

fun('hello')
fun.bind(null, 'hello')() 
fun.call(null, 'hello')
fun.apply(null, ['hello'])
