var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

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

function jpg() {
  return gulp.src("img/**/*.jpg")
    .pipe(imagemin([
      // imagemin.jpegtran({
      //   progressive: true,
      //   arithmetic:true
      // }),
      imageminMozjpeg({quality: 80, progressive: true, tune: "ms-ssim", smooth: 2})
    ]))
    .pipe(gulp.dest("images"));
};

function png () {
  return gulp.src("img/**/*.png")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest("images"));
};

function svg () {
  return gulp.src("img/**/*.svg")
    .pipe(imagemin([
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("images"));
};

function watch() {
  gulp.watch("sass/**/*.sass", style);
}

var build = gulp.series(style, jpg, png, svg);
// , watch

exports.default = build;
