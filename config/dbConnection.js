var mysql = require('mysql');

var connMySQL = function () {
    // só vai ser executado quando a pagina que utiliza o BD for chamada e nao no carregamento do programa
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'portal_noticias'
    });

}

module.exports = function () {
    return connMySQL;
}