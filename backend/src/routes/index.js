const {Router} = require('express');
const router = Router();
const User=require('../models/User');

router.get('/', (req, res) => res.send('hello world'));

module.exports = router;