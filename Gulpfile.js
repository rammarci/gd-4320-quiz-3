var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'public_html',
    port: 3001
  });
});

gulp.task('default', ['connect']);
