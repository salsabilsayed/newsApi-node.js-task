const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const news = require('./tools/newsApi');
const path = require('path');
const hbs = require('hbs');

app.set('view engine', 'hbs');

const publicDirectory = path.join(__dirname,'../public');
app.use(express.static(publicDirectory));

const viewsPath = path.join(__dirname,'../templates/views');
app.set('views',viewsPath);

const partialsPath = path.join(__dirname,'../templates/partials');
hbs.registerPartials(partialsPath);


app.get('/',(req,res)=>{
    
   news((error,data)=>{
       if(error){
           return res.render('index',{error})
       }
       res.render('index',{
           newsData: data
       })
   });
})


app.get('*',(req,res)=>{
    res.render('notfound')
})

app.listen(port,()=>{
    console.log('server is runnung!');
})
