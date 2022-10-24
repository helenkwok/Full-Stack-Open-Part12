const express = require('express');
const redis = require('../redis');
const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async(_,res) => {
  const todosCount = await redis.getAsync('added_todos')
  res.send({
    "added_todos": todosCount? parseInt(todosCount) : 0
  });
});


module.exports = router;
