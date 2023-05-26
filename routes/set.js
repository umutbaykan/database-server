const express = require('express');
const router = express.Router();

const SetController = require('../controllers/set');

router.post('/', SetController.Index);

module.exports = router;
