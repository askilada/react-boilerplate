const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require('gulp-concat');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');


gulp.task('default', ['my-app']);


gulp.task('my-app', function () {
    var bundler = browserify('src/app.js');
    bundler.transform(babelify)

    bundler.bundle()
        .on("error", (err) => console.error(err))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('public/js'))

})


gulp.task("js", function () {
    return gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(gulp.dest("public/js"));
});