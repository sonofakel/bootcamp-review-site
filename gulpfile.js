var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("app/scss/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("app/js/partials/*.html").on('change', browserSync.reload);
  gulp.watch("app/js/*.js").on('change', browserSync.reload)

});

gulp.task('sass', function() {
  return gulp.src("app/scss/*.scss")
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream())
});

gulp.task('default', ['serve']);