const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const infoRouter = require('./routes/info');
//let checkIp = require('./middlewares/check-ip')
let remember = require('./middlewares/rememberMiddleware')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(checkIp)
app.use(session(
{ secret:'secreto',
  resave: false,
  saveUninitialized: true }
  ));
  app.use(remember)

app.use(function(req,res,next){

  if(req.session.user != undefined){
    res.locals.user = req.session.user
 }
 return next()
 
})


app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/', productRouter);
app.use('/', cartRouter);
app.use('/info', infoRouter);



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
