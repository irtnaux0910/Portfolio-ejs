// app.js
// Xuan Tri Nguyen 
// 3013888576
// Duedate: Sep 26, 2024  
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import routers
var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users');  
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Ensure extended to capture form data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.use('/', indexRouter);  // Use the index router for main routes
app.use('/users', usersRouter); 

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export the app for use in server.js or another entry file
module.exports = app;
