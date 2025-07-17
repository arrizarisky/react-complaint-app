const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const respondRouter = require('./routes/respond');
app.use('/respond', respondRouter);

module.exports = app;