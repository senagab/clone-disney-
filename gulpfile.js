const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    gulp.src('./src/styles/*.scss') // recupera os arquivos .scss 
        .pipe(sass({ outputStyle: 'compressed'})) // comprime os arquivos
        .pipe(gulp.dest('./dist/css'))
}

exports.default = styles;
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}