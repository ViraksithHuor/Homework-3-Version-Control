const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'Simple Node Handlebars App';

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
    appName: APP_NAME,
    message: 'Welcome to the simplest Handlebars app.'
  });
});

app.get('/about', (req, res) => {
  const year = new Date().getFullYear();
  res.render('about', {
    title: 'About',
    appName: APP_NAME,
    year,
    description: 'A tiny Express app for a homework assignment.'
  });
});

app.get('/items', (req, res) => {
  const items = ['Apples', 'Bananas', 'Carrots', 'Dates'];
  res.render('items', {
    title: 'Items',
    appName: APP_NAME,
    items
  });
});

app.get('/status', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.get('/config', (req, res) => {
  res.render('config', {
    title: 'Config',
    appName: APP_NAME,
    port: PORT
  });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} listening on port ${PORT}`);
});
