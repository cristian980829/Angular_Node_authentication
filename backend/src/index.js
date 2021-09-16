const express = require('express');
const app = express();

require('./database')

app.use(require('./routes/index'))

app.listen(3000);
