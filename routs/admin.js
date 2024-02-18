const express = require('express');
const router = express.Router();
const { approve_shop } = require('../contracts/fixed');
router.post('/approve-shop', (req, res) => {
    approve_shop()
})

module.exports = router;