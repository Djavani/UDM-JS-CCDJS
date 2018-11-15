var app = require('./config/server');

//antes de usar o modulo de rotas Consign
// var rotaNoticias = require('./app/routes/noticias');
// rotaNoticias(app);
// var rotaHome = require('./app/routes/home')(app);
// var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);



app.listen(3000, function(){
    console.log('servidor ON!');
})