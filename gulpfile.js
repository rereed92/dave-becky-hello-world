var gulp = require('gulp');
var clean = require('gulp-clean');
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');

gulp.task('default', ['run']);

gulp.task('clean', function() {
    console.log('Running clean');
    gulp.src('public/main*.js')
    .pipe(clean());
})

gulp.task('scripts', function () {
    console.log('Running scripts');
    gulp.src('./src/main.js')
    .pipe(minify())
    .pipe(uglify())
    .pipe(gulp.dest('public')); 
});

gulp.task('build', ['clean', 'scripts']);