const router = require('express').Router();
const dbProviders = require('../controllers/providers')

//Logger
const logger = require('../utils/logger');

//Get All Providers
router.route('/').get((request, response)=>{
    dbProviders.getProviders().then(result => {
        response.json(result);
    })
})

//Get Pages
router.route('/get-pages').get((request, response)=>{
    dbProviders.getPages().then(result => {
        response.json(result);
    })
})

//Get Providers By Pagination
router.route('/:index').get((request, response)=>{
    dbProviders.getProvidersByPagination(request.params.index).then(result => {
        response.json(result);
    })
})

//Delete Provider By Index
router.route('/delete/').put((request, response)=>{
    let index = request.body.name
    dbProviders.deleteProvider(index).then(result => {
        response.json(result);
    })
})

//Login
/*router.route('/login').post((request, response)=>{
    let userRegister = {...request.body}
    logger.info(JSON.stringify({...request.body}) + "/login - POST -")
    dbusers.iniciarSesion(userRegister, response).then(result => {
        if(result.Code_Type === "Error")
        {
            response.status(401);
        }
        response.json(result);
    })
})*/

module.exports = router;