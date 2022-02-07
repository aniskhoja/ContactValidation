var router = require('./src/routes');
var express = require('express');
var dbSetup = require('./db/db-setup')
var path = require('path')
var jade = require('jade')

var app = express();

dbSetup();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(logger('dev'))
//##what is difference
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(router)


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
  res.send('error');
});

PORT = process.env.PORT || 9000
app.listen(9000, (err) => {
  if(err) { console.log(err) }
  console.log("Connected to port " + PORT)
})

module.exports = app;
