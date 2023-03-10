const gulp = require('gulp');
const imagemin = require('gulp-imagemin');


const imagemim = function() {
    return gulp.src("./src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
}

exports.imageMimi = imagemim;

