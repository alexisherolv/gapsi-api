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

//Insert Provider
router.route('/insert/').post((request, response)=>{
    let register = {...request.body}
    dbProviders.insertProvider(register).then(result => {
        response.json(result);
    })
})

module.exports = router;