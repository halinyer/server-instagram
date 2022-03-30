let modelRoutes = `const express = require('express')
const router = express.Router()
//Your controller of this route
const { } = require('../controllers')


router.get('/', )

router.post('/', )

router.put('/',)

router.delete('/',)


module.exports = router`


function modelControllers(nameFile) {
    
    return `const {request,response} = require('express')

    const get${nameFile} = (req=request, res=response) => {
        res.json({
            msg: 'Method - Get'
        })
    }
    
    
    const post${nameFile} = (req=request, res=response) => {
        res.json({
            msg: 'Method - Post'
        })
    }
    
    const Put${nameFile} = (req=request, res=response) => {
        const {id} = req.params
        res.json({
            msg: 'Method - put'
        })
    }
    
    
    const delete${nameFile} = (req=request, res=response) => {
        const {id} = req.params
        res.json({
            msg: 'Method - Delete'
        })
    }
    
    
    //Export your controllers
    module.exports = {
        
    }`
}
module.exports = {
    modelRoutes,
    modelControllers
}