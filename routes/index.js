const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const myJson = {
    one: {
      two: {
        three: 3,
      },
    },
  };
  console.log('this is new my json', myJson);
  res.render('index', { title: 'Express' });
});

module.exports = router;
