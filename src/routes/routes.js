const { get, post, put, deletetp } = require('../controllers/controllers');

const router = require('express').Router();

router.get('/tp', get);
router.post('/tp', post);
router.put('/tp', put);
router.delete('/tp', deletetp);

module.exports = router;