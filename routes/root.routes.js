const router = require('express').Router();

// não remova esse endpoint, e para o avaliador funcionar
router.get('/', (_req, res) => {
  res.send();
});

module.exports = router;
