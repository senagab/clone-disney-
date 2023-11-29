const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    gulp.src('./src/styles/*.scss') // recupera os arquivos .scss 
        .pipe(sass({ outputStyle: 'compressed'})) // comprime os arquivos
        .pipe(gulp.dest('./dist/css')) // destina a pasta
}

function images() {
    gulp.src('./src/images/**/*') // recupera todas as subpastas e seus arquivos
        .pipe(imagemin()) // minifica os arquivos
        .pipe(gulp.dest('./dist/images')); // destina a pasta
}

exports.default = gulp.parallel(styles, images)

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}