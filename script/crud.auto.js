const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const {modelRoutes, modelControllers} = require('./crud.model')

let options = [
    {
        type:'input',
        name: 'nombre',
        message: 'Nombre de Ruta',
    }
]



async function main (){
  
    inquirer.prompt(options)
    .then(({nombre}) =>{
       
        let nameFile = `${nombre}.js`
        let pathController = path.join(__dirname,'../controllers/',nameFile) 
        let pathRoutes = path.join(__dirname,'../routes/',nameFile) 

        
        fs.writeFile(pathController,modelControllers(nombre), err => {
            if (err) throw err;
            console.log("The file was succesfully saved!");
        })


        fs.writeFile(pathRoutes,modelRoutes, err => {
            if (err) throw err;
            console.log("The file was succesfully saved!");
        })

        
         
    })
}

main()