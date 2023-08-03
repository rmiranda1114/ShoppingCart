const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
require('./startup/routes.js')(app);
require('./startup/db.js')();
const importData = require('./seederScript');

// importData();

app.listen(port, console.log(`Server listening on port ${port}`));