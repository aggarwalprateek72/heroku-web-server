
const express= require('express');
const hbs = require('hbs');
var app= express();

app.use(express.static(__dirname+ '/'));
const port= process.env.PORT || 3000;

hbs.registerPartials(__dirname +'/views/partials');
app.set('view engine', 'hbs');
app.get('/',(req, res) =>{
//        res.send('<h1>My First Server</h1>');
  
    res.send({
        name: 'Prateek Aggarwal',
        likes: [
            'cricket',
            'songs'
        ]
    })
        });

app.get('/about', (req, res)=>{
   res.render('about.hbs', {
       pagetitle: 'ABout page',
       currentdate: new Date().getFullYear()
   });  
});

app.get('/home', (req, res)=>{
    res.render('home.hbs',{
        pagetitle: 'Home Page of my website',
        currentdate: new Date().getFullYear()
    })
})
app.listen(port, ()=>{
    console.log('Server on port 3000');
});
