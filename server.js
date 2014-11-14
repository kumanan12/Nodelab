/**
 * Created by kmurugesan on 11/13/2014.
 */
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

var express = require("express");
var port=3000;
var app=express();
var handlebars = require("express3-handlebars")
                        .create({defaultLayout:'main'});

var fortune = require("./lib/fortune");
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');



app.set('port', process.env.PORT || port);

app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test == '1';
    next();
})

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
    res.render('home');
});
app.get('/about', function(req, res){
    res.render('aboutus', {
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'

    });
});

app.get('/tours/hood-river', function (req, res) {
    res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function (req, res) {
    res.render('tours/request-group-rate');
})

//404 page.
app.use(function (req, res) {
    res.render('404');
});


// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.render('500');
});



app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});