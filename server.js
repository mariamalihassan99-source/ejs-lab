const express = require("express") //importing express package
const app = express() // creates a express application
const resturaunts = require('./data.js') // to import the data.js file from the views folder


//routes
app.get('/', (req, res) => {
  res.render('homepage.ejs');
});

app.get('/restaurants', (req, res) => {
  res.render('all-resturaunts.ejs', {
    resturaunts: resturaunts
  });
});

app.get('/restaurants/:id', (req, res) => {
  const resturauntId = parseInt(req.params.id); 
    const foundResturaunt = resturaunts.find(r => r.id === resturauntId)
    res.render('resturaunts-details.ejs', {
      resturaunt: foundResturaunt
    });
});



app.use(express.static('public')); //all static files are in the public folder

app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000
