var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('../app');

module.exports = function(app, config) {
   // view engine setup
   app.set('views', path.join(config.root, 'views'));
   app.set('view engine', 'jade');
   app.locals.pretty = true;

   app.use(favicon(path.join(config.root, '/public/img/favicon.ico')));
   app.use(logger('dev'));
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({
     extended: true
   }));
   app.use(cookieParser());
   app.use(express.static(config.root + '/public'));

   routes(app);

   /// catch 404 and forward to error handler
   app.use(function(req, res, next) {
       var err = new Error('Not Found');
       err.status = 404;
       next(err);
   });

   /// error handlers

   // development error handler
   // will print stacktrace
   if (app.get('env') === 'development') {
       app.use(function(err, req, res, next) {
           res.status(err.status || 500);
           res.render('error', {
               message: err.message,
               error: err,
               title: 'error'
           });
       });
   }

   // production error handler
   // no stacktraces leaked to user
   app.use(function(err, req, res, next) {
       res.status(err.status || 500);
       res.render('error', {
           message: err.message,
           error: {},
           title: 'error'
       });
   });
};

