const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type:'number',
        demandOption:true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'Muestra la tabla hasta el numero dado'
    })
    .check((argv,options) =>{
        if(isNaN(argv.base)){
            throw 'La base tiene que ser un numero.'
        }
        if(isNaN(argv.hasta)){
            throw 'El tope tienen que ser un numero.'
        } 
        return true;
        
    })
    .argv;

    module.exports = argv;