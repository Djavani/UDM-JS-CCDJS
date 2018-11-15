var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("<html><body>Portal de noticias do bacana vindo do express</body></html>")
});

app.get('/tecnologia', function(req, res){
    res.send("<html><body>Noticias de tecnologia vindo do express</body></html>")
});


app.listen(3000, function(){
    console.log('servidor subiu com Express');    
})