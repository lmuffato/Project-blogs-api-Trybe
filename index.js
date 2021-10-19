const express = require('express');
const bodyParser = require('body-parser'); 
const userController = require('./src/controller/User');
const midError = require('./src/middleware/error');

const app = express();

app.use(bodyParser.json());

/* app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ messege: err.message });
  return res.status(500).json({ messege: err.message });
});
 */

app.use(midError);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userController.createUser); 

app.listen(3000, () => console.log('ouvindo porta 3000!'));
