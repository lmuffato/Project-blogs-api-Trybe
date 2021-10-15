const express = require('express');
const { User } = require('./models');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/users', async (req, res) => {
  try {
    const user = await User.findAll();
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));