const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss') // recupera os arquivos .scss 
        .pipe(sass({ outputStyle: 'compressed'})) // comprime os arquivos
        .pipe(gulp.dest('./dist/css')) // destina a pasta
}

function images() {
    return gulp.src('./src/images/**/*') // recupera todas as subpastas e seus arquivos
        .pipe(imagemin()) // minifica os arquivos
        .pipe(gulp.dest('./dist/images')); // destina a pasta
}

exports.default = gulp.parallel(styles, images, scripts)

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}