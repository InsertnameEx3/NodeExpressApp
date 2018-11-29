//Application variables
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const yargs = require('yargs');
const argv = yargs.argv;
const notes = require('./notes.js');

var helpers = require('handlebars-helper');
//=> returns object with all (130+) helpers
var bodyParser = require('body-parser');


//Defined Routes
const indexRouter = require('./routes/index');
const addRouter = require('./routes/add');
const delRouter = require('./routes/del');
const showRouter = require('./routes/show');

var app = express();
var publicDir = require('path').join(__dirname,'/public');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(publicDir));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/add',addRouter);
app.post('/del', delRouter);
//GET Route and go to pre defined routes
app.use('/', indexRouter);
app.use('/add', addRouter);
app.use('/del', delRouter);
app.use('/show', showRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
