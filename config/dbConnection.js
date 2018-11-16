var mysql = require('mysql');

var connMySQL = function () {
    // só vai ser executado quando a pagina que utiliza o BD for chamada e nao no carregamento do programa
    console.log('Conexao com o bd foi estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'portal_noticias'
    });

}

module.exports = function () {
    console.log('O autoload carregou o modulo de conexao com o BD.');    
    return connMySQL;
}