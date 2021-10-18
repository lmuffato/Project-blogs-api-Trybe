const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

const { userRouter, loginRouter, categoryRouter, postRouter } = require('./routers');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

// ------------------------------ USER ------------------------------//
app.use('/user', userRouter);
app.use('/login', loginRouter);

// ------------------------------ CATEGORIES ------------------------------//

app.use('/categories', categoryRouter);

// ------------------------------ POST ------------------------------//

app.use('/post', postRouter);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
