var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/tecnologia', function(req, res){
    //res.render("secao/tecnologia.ejs")
    res.render("secao/tecnologia")
});

app.get('/', function(req, res){
    res.send("<html><body>Portal de noticias do bacana vindo do express</body></html>")
});



app.listen(3000, function(){
    console.log('servidor subiu com Express');    
})