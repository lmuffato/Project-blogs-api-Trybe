const express = require('express');
const rescue = require('express-rescue');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
const service = require('../services/blogPostService');

const createPost = rescue(async (req, res) => {
    try {
        const { title, content, categoryIds } = req.body;
        const { id: userId } = req.user.dataValues;
        const created = await service.createPost({ title, content, categoryIds, userId });
        if (created === 'erroCategory') {
            return res.status(400).json({ message: '"categoryIds" is required' });
        } 
        if (created === '!existsCategory') {
            return res.status(400).json({ message: '"categoryIds" not found' });
        }

        return res.status(201).json(created);
      } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });
      }
  });

  const findAllPosts = rescue(async (req, res) => {
    try {
        const findPosts = await service.findAllPosts();
        
        if (findPosts === '!exists') {
          return res.status(409).json({ message: 'Post not found' });
        }
        return res.status(200).json(findPosts);
      } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });
      }
  });

  module.exports = { createPost, findAllPosts };