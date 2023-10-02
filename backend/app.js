// app.js as entry point

// setup cors
const cors = require('cors');
app.use(cors({ origin: true, credentials: true }));

// setup Express server-side app
const express = require('express');
const app = express();
app.use(express.json({ extended: false }));

// setup Mongodb on backend
const connectDB = require('./config/db');
connectDB();

// http methods api
const books = require('./routes/api/books');
app.use('/api/books', books);

// http methods
app.get('/', (req, res) => res.send('Hello world!'));

// setup localhost port number
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));