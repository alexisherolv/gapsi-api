const router = require('express').Router();

const dbVersion = require('../controllers/version')

router.route('/').get((request, response)=>{
    dbVersion.getVersion().then(result => {
        response.json(result);
    })
})

module.exports = router;