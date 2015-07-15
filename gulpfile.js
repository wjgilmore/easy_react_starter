var gulp = require('gulp');
var gutil = require('gulp-util');
var gulp = require('gulp-param')(require('gulp'), process.argv);
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

gulp.task('build', function(watch) {  

  var browsifier = browserify({
    entries: ['src/js/App.jsx'],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {}
  }).transform(babelify);

  function rebundle() {
    browsifier.bundle()
      .on('error', function(err) { gutil.log(err); this.emit('end'); })
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/js'));
  }

  if (watch) {
    var bundle = watchify(browsifier);
    browsifier.on('update', function() {
      gutil.log('Rebundling...');
      rebundle();
    });
  }
 
  rebundle();

});