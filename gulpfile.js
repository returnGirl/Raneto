
'use strict';

// Modules
var gulp = require('gulp');
var server = require('gulp-develop-server');
var browserSync = require('browser-sync').create();
var gulpsync = require('gulp-sync')(gulp);

gulp.task('copy_libs', function () {

  var source = [
    'node_modules/bootstrap/**/*',
    'node_modules/bootstrap-rtl/**/*',
    'node_modules/fitvids/**/*',
    'node_modules/highlightjs/**/*',
    'node_modules/jquery/**/*',
    'node_modules/masonry-layout/**/*',
    'node_modules/sweetalert/**/*',
    'node_modules/jquery.backstretch/**/*',
  ];

  var dest = 'themes/default/public/lib';

  return gulp.src(source, { base: 'node_modules' })
             .pipe(gulp.dest(dest));

});


/**
 *
 * gulp watch: 监听代码文件变化,重启浏览器服务
 *
 */
 gulp.task('watch', gulpsync.sync([
   'server',
   'browser-sync'
 ]), function () {
   gulp.watch([
     './app/**/*',
     './example/**/*',
     './themes/**/*.html',
     './themes/**/*.css'
    //  './themes/**/*.js'
   ], function (event) {
      if (event.path.endsWith('.js')) {
        gulp.start('server:restart');
      } else {
        gulp.start('browser-reload');
      }
   });
 });

 /**
  *
  * gulp server: 启动服务器
  *
  */

 gulp.task('server', function() {
   server.listen( { path: './example/server.js' } );
 });

 /**
  *
  * gulp server:restart: 重启server.js
  *
  */

 gulp.task('server:restart', function() {
   server.restart(function() {
     gulp.start('browser-reload');
   });
 });

 /**
 *
 * gulp browser-sync: 打开浏览器
 *
 */

 gulp.task('browser-sync', function() {
   browserSync.init({
     proxy: "http://localhost:3002"
   });
 });

 /**
 *
 * gulp browser-reload: 刷新浏览器
 *
 */

gulp.task('browser-reload', function() {
  browserSync.reload();
});

// Default
gulp.task('default', ['copy_libs', 'watch']);
