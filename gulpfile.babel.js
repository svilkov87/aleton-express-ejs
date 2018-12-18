// /* eslint-disable node/no-unpublished-require */
// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const autoprefixer = require('gulp-autoprefixer');
// const cssnano = require('gulp-cssnano');
// const plumber = require('gulp-plumber');
// const concat = require('gulp-concat');
// const browserSync = require('browser-sync').create();
// /* eslint-enable node/no-unpublished-require */

// gulp.task('scss', () => {
// 	return gulp
// 		.src('dev/sass/**/*.scss')
// 		.pipe(plumber())
// 		.pipe(sass())
// 		.pipe(
// 			autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
// 				cascade: true
// 			})
// 		)
// 		.pipe(cssnano())
// 		.pipe(gulp.dest('public/stylesheets'));
// });

// // gulp.task('scripts:lib', () => {
// // 	return gulp
// // 		// .src(['node_modules/jquery/dist/jquery.min.js' , 'dev/js/**/*.js' ])
// // 		.src(['node_modules/jquery/dist/jquery.min.js'])
// // 		.pipe(concat('lib.min.js'))
// // 		.pipe(gulp.dest('public/javascripts'));
// // });

// gulp.task('scripts', () => {
// 	return gulp
// 		.src('dev/js/**/*.js')
// 		.pipe(concat('scripts.js'))
// 		.pipe(gulp.dest('public/javascripts'));
// });

// gulp.task('watch', function() {
// 	gulp.watch('dev/sass/**/*.scss', gulp.series('scss'))
// 	gulp.watch('dev/js/**/*.js', gulp.series('scripts'))
// });

// gulp.task('default', gulp.series( 
// 	gulp.parallel('scss', 'scripts'),
// 	'watch'
// ));

import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from'gulp-autoprefixer';
import del from 'del';

const paths = {
	styles: {
			src: 'src/sass/**/*.scss',
			dest: 'public/stylesheets/'
		},
	scripts: {
		src: 'src/scripts/**/*.js',
		dest: 'public/javascripts/'
	}
};

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del([ 'assets' ]);

/*
 * You can also declare named functions and export them as tasks
 */
export function styles() {
	return gulp.src(paths.styles.src)
	.pipe(sass())
	.pipe(cleanCSS())
	// pass in options to the stream
	.pipe(rename({
		basename: 'main',
		suffix: '.min'
	}))
	.pipe(
		autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
			cascade: true
		})
	)
	.pipe(gulp.dest(paths.styles.dest));
}

export function scripts() {
	return gulp.src(paths.scripts.src, { sourcemaps: true })
	.pipe(babel())
	.pipe(uglify())
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest(paths.scripts.dest));
}

 /*
	* You could even use `export as` to rename exported tasks
	*/
// function watchFiles() {
// 	gulp.watch(paths.scripts.src, scripts);
// 	gulp.watch(paths.styles.src, styles);
// }
// export { watchFiles as watch };

// const build = gulp.series(clean, gulp.parallel(styles, scripts));
// gulp.series(clean, gulp.parallel(styles, scripts));

// gulp.task('default', gulp.series(clean, gulp.parallel(styles, scripts)));
/*
 * Export a default task
 */
// export default build;

gulp.task('watch', function() {
	gulp.watch(paths.scripts.src, scripts);
	gulp.watch(paths.styles.src, styles);
});

gulp.task('default', gulp.series( 
	clean, gulp.parallel(styles, scripts),
	'watch'
));