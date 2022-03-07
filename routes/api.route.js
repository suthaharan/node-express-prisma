const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.get('/movies', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.get('/movies/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/movies', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.delete('/movies/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.patch('/movies/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
