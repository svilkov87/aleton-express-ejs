/* eslint-disable node/no-unpublished-require */
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
/* eslint-enable node/no-unpublished-require */

gulp.task('scss', () => {
  return gulp
    .src('dev/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true
      })
    )
    .pipe(cssnano())
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('dev/scss/**/*.scss', gulp.series('scss'))
});

gulp.task('default', gulp.series( 
    gulp.parallel('scss'),
    'watch'
 ));