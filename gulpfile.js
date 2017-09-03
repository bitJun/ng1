var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-cleancss');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var requirejsOptimize = require("gulp-requirejs-optimize");
var watch = require('gulp-watch');


var scripts = [
    'src/js/*.js',
    'src/js/**/**/*.js',
    'src/js/**/*.js'
]

var css = [
    'src/sass/apps.scss',
    'src/sass/**/*.scss'
]
gulp.task('scss',function(){
	return gulp.src('src/sass/apps.scss')
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(gulp.dest('build/css'))
});
gulp.task('js', function(){
    gulp.src('src/js/libs/common.js')
        .pipe(rename('common.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))

    gulp.src('src/js/libs/require.js')
        .pipe(rename('require.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))

    gulp.src('src/js/bootstrap.js')
        .pipe(requirejsOptimize({
            name: 'bootstrap',
            optimize: 'none',
            mainConfigFile: "src/js/config.js",
            baseUrl: 'src/js'
        }))
        .pipe(gulp.dest('build/js'))
});

gulp.task('watchscss', ['scss'], function () {
    gulp.watch(css, ['scss']);
});

gulp.task('watchjs', ['js'], function () {
    gulp.watch(scripts, ['js']);
});
