const express = require('express');
const { BlogPost, Category, PostsCategory, User } = require('./models');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/blogpost', async (req, res) => {
  try {
    const categories = await BlogPost.findAll();
    if (!categories) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/category', async (req, res) => {
  try {
    const categories = await Category.findAll();
    if (!categories) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/postcat', async (req, res) => {
  try {
    const categories = await PostsCategory.findAll();
    if (!categories) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const categories = await User.findAll();
    if (!categories) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});
app.listen(3000, () => console.log('ouvindo porta 3000!'));