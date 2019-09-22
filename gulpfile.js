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

function styleAbout() {
  return gulp.src('sass/about.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(gulp.dest('css'))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'about',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};

function styleContacts() {
  return gulp.src('sass/pcontacts.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(rename({
      basename: 'contacts',
    }))
    .pipe(gulp.dest('css'))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'contacts',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};

function styleCatalog() {
  return gulp.src('sass/catalog.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([
			autoprefixer()
    ]))
    .pipe(gulp.dest('css'))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'catalog',
      suffix: '.min'
    }))
		.pipe(gulp.dest('css'));
};

function jpg() {
  return gulp.src("optimg/**/*.jpg")
    .pipe(imagemin([
      // imagemin.jpegtran({
      //   progressive: true,
      //   arithmetic:true
      // }),
      imageminMozjpeg({quality: 90, progressive: false, smooth: 1})
    ]))
    .pipe(gulp.dest("img"));
};

function png () {
  return gulp.src("optimg/**/*.png")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest("img"));
};

function svg () {
  return gulp.src("optimg/**/*.svg")
    .pipe(imagemin([
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("img"));
};

function watch() {
  gulp.watch("sass/**/main.sass", style);
  gulp.watch("sass/**/about.sass", styleAbout);
  gulp.watch("sass/**/pcontacts.sass", styleContacts);
  gulp.watch("sass/**/catalog.sass", styleCatalog);
}

var build = gulp.series(style, styleAbout, styleContacts, styleCatalog, jpg, png, svg, watch);

exports.default = build;
