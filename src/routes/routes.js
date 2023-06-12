const { get, post, put, deleted } = require('../controllers/controllers');

const router = require('express').Router();

router.get('/tp4', get);
router.post('/tp4', post);
router.put('/tp4', put);
router.delete('/tp4', deleted);

module.exports = router;