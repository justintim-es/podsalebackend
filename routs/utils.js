const express = require('express');
const router = express.Router();
const fs = require('fs');
var path = require('path');
router.get('/create-txt-download/:content', (req, res) => {
    fs.writeFileSync(`pkethonpod-${req.params.content}.txt`, req.params.content);
    return res.download(path.resolve(`pkethonpod-${req.params.content}.txt`));
});

module.exports = router;