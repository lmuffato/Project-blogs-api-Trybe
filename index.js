const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(require('./routes/user.routes'));
app.use(require('./routes/root.routes'));
app.use(require('./routes/login.routes'));
app.use(require('./routes/category.routes'));

const PORT = 3000;
app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}!`));
