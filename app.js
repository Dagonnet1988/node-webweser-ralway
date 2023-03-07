import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import hbs from 'hbs';
const app = express();
const __dirname = 'C:/Users/React Native/Documents/node/06-webServer';
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//  servir contenido estatico
app.use( express.static(__dirname + '/public'));

app.get('/',  (req, res) => {
  res.render('home', {
      nombre: 'Diego Sanchez',
      titulo: 'Curso de Node'
  });
}); 

app.get('/generic',  (req, res) => {
  res.render('generic', {
      nombre: 'Diego Sanchez',
      titulo: 'Curso de Node'
  });
}); 

app.get('/elements',  (req, res) => {
  res.render('elements', {
      nombre: 'Diego Sanchez',
      titulo: 'Curso de Node'
  });
}); 

app.get('*',  (req, res) => {
  res.send('404 | Page not found')
});

app.listen(port);
console.log(port);