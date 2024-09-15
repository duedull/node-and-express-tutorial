const { newf } = require('./export-fun');
const no = 12;
const name = 'secrent name'
const real_name = 'abhay singh'
require('./module-function');

if (no > 10) {
    console.log('large number');
} else {
    console.log('small number');
}

console.log(`hey this is my first node app`);

console.log('hey nigga');

newf();
// some important global variables:
//__dirname
//__filename
//require - function to use modules
//module - info about current modules
//process - info about the enviorment where the program is being executed