var array = ['ami', 'tumi', 'she'];
array[2] = 'amra';

console.log(array.indexOf('tumi'));

if (array[2] == 'she') {
    console.log('array not changed');
}
else {
    console.log('array palte geche');
    console.log(array);
}