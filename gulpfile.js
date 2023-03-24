const gulp = require('gulp');
const imageMin = require('gulp-imagemin');


const imageMimi = function() {
    return gulp.src('./src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/images'))
};

exports.imageMimi = imageMimi;

