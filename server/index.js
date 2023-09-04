require('dotenv').config();
const express = require('express'); //require is function for a import of modules to a file
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middlewere/ErrorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
//for parsing JSON-format in our application
app.use(express.json());
//showing the way to the Static folder
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

//Обработка ошибок последний MiddleWere
app.use(errorHandler);

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'WORKING!!!' });
// });

const start = async () => {
  try {
    await sequelize.authenticate();
    //match the state of database with schemas of data
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Serve started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
