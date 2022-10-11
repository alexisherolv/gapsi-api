const router = require('express').Router();

const dbMessage = require('../controllers/message')

//Get Message User
router.route('/').get((request, response)=>{
    dbMessage.getMessage().then(result => {
        response.json(result);
    })
})

module.exports = router;