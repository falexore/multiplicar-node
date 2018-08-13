//requeries
//const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

const argv = require('./config/yargs').argv;

var colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];


switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconodico');
}


//console.log(argv);


//let base = 1265;

//console.log(process.argv);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(argv.limite);
//console.log(argv2);

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += (`${base} * ${i} = ${base*i} \n`);
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
// });


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(e => console.log(e));