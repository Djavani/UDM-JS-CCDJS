module.exports = function (app) {
    app.get('/', function (req, res) {
        //res.render("secao/tecnologia.ejs")
        res.render("home/index")
    });
}