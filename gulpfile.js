var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

function style() {
  return gulp.src('sass/main.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(gulp.dest('css'))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};

function watch() {
  gulp.watch("sass/**/*.sass", style);
}

var build = gulp.series(style, watch);

exports.default = build;
