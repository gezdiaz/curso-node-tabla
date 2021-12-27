const { captureRejections } = require('events');
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
    try {
        let salidaConsola ='=======================\n'.rainbow;
        salidaConsola += (`      Tabla del ${base}\n`).bold.brightBlue;
        salidaConsola += '=======================\n'.rainbow;

        let salidaArchivo = '';

        for (let i = 1; i <= hasta; i++) {
            salidaConsola += `${base} `.green + 'X'.red + ` ${i}`.blue + ' = '.yellow + `${base * i}\n`.brightYellow.bold;
            salidaArchivo += `${base} X ${i} = ${base * i}\n`;
        }

        if(listar){
            console.log(salidaConsola);
        }

        const nombreArchivo = `tabla-${base}.txt`;

        fs.writeFileSync('./out/' + nombreArchivo, salidaArchivo);
        return nombreArchivo;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}