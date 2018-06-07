const express = require('express');
const logger = require('morgan');
// logging for the application
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
import React from 'react';
const renderToString = require('react-dom/server').renderToString;
import Home from './components/Home';

// Configure our app for morgan and body parser
app.use(logger('dev'));

// parser for requests from clients
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Used for syncing routes with the the front end
app.get('/*', function(req, res) {
    res.send(renderToString(<Home />))
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
