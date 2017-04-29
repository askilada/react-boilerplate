const gulp = require("gulp");
const babel = require("gulp-babel");
const concat = require('gulp-concat');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const less = require('gulp-less');


gulp.task('default', ['my-app'], function (done) {
    done()
});


gulp.task('my-app', function (done) {
    var bundler = browserify('src/app.js');
    bundler.transform(babelify)

    bundler.bundle()
        .on("error", (err) => console.error(err))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('public/js'))
        done()
})

gulp.task("watch", function(done) {
    gulp.watch("src/**/*.js", ["my-app"]);
    gulp.watch("less/**/*.less", ["less"]);
    done()
});

gulp.task('less', function () {
    return gulp.src('less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'))
})


gulp.task("js", function () {
    return gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(gulp.dest("public/js"));
});