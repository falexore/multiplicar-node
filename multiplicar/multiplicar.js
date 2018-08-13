//requeries
const fs = require('fs');
var colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        //data += (`${base} * ${i} = ${base*i} \n`);
        console.log(`${base} * ${i} = ${base*i}`.green)

    }

}




let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}-to ${limite}.txt`, data, (err) => {
            if (err) throw reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}