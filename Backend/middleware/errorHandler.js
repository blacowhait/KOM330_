module.exports = function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if(err.name == "MulterError") {
    err.status = 400
  }
  res.status(err.status || 500).json({
    success: false,
    message: res.locals.message,
    error: res.locals.error,
  })
}