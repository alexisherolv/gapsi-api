var router = require('express').Router();

//Logger
const logger = require('../utils/logger');

router.get('/', (req, res)=>{
  logger.info("welcome to GAPSI API");
  res.send('welcome to GAPSI API');
});

//Version
router.use('/version', require('./version.js'));

//Message
router.use('/message', require('./message.js'));

//Providers
router.use('/providers', require('./providers.js'));

module.exports = router;