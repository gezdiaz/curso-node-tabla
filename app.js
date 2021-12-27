
const {crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');




// const base = 5;

console.clear();

crearArchivo(argv.base, argv.hasta, argv.listar)
    .then( nombreArchivo => console.log('Archivo', nombreArchivo, 'creado') )
    .catch(err => console.log('e produjo un error:', err));



