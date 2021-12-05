// requerir un archivo
const { rejects } = require('assert');
const fs = require('fs'); 
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) =>{
    try{
        let salida =`================
        Tabla del: ${base}\n================\n`;
        
        let consola =`================\n
        Tabla del: ${colors.blue(base)}\n
        ================\n`;

        for(let i=1;i <= hasta;i++){
            consola += `${colors.red(base)} ${'x'.green} ${colors.red(i)} ${'='.green} ${ base * i}\n`;
            salida += `${base} x ${i} = ${ base * i}\n`;
        }
        
        if(listar)
            console.log(consola);

        fs.writeFileSync('./salida/tabla-'+base+'.txt',salida);
        
        return `tabla-${ base }.txt`;
    }
    catch(error){
        throw error
    }
    
}

module.exports = {
    crearArchivo
}