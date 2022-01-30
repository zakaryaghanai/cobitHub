var createError = require('http-errors');
var express = require('express');
var app = express();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  var error_msg = req.method + ": Route for " + req.url +
      ' Not Found' + "\n------------------------------------------------------\n"
      + err.stack;
  res.send('<pre>' + new Error(error_msg) +'<pre>' );
});

module.exports = app;
