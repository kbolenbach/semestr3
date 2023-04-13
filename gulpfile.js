const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imageMin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

const path = {
    root: "./dist",
    cssSrc: "./src/scss/**/*.scss",
    cssDist: "./dist/css",
    imageSrc: "./src/images/**/*",
    imageDist: "./dist/images/",
    htmlSrc: "./src/html/index.html",
    htmlDist: "./dist/html/",
}


const css = function() {
    return gulp.src(path.cssSrc)
        .pipe(sass()).on("error", sass.logError)
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.cssDist))
};

const imageMimi = function() {
    return gulp.src('./src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./dist/images'))
};

const html = function() {
    return gulp.src(path.htmlSrc)
        .pipe(fileinclude(
            {
                prefix: "@@",
                basepath: "@file",
            }
        ))
        .pipe(gulp.dest(path.root))
}

const cssCompiler = function() {
    return gulp.src(path.cssSrc)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(path.cssDist))
}

const htmlCompiler = function() {
    return gulp.src(path.htmlSrc)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(path.root));
}

const server = function (cb) {
    browserSync.init(
        {
            server: {
                baseDir: path.root
            }
        })

        cb();
}

const serverReload = function(cb) {
    browserSync.reload();
    cb();
}

const watch = function() {
    gulp.watch(path.cssSrc, gulp.series(css, serverReload))
    gulp.watch(path.htmlSrc, gulp.series(html, serverReload))
}


exports.default = gulp.series(html, css, server, watch);
exports.production = gulp.series(imageMimi, html, css, cssCompiler, htmlCompiler);