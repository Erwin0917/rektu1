var gulp = require("gulp");
var $ = require("gulp-load-plugins")({
    lazy: true
});
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");

//var gutil = require("gulp-util");

gulp.task("css", function() {

    $.util.log($.util.colors.yellow("Zmiana plików SCSS to CSS"));

    return gulp.src("./_css/*.scss")
        .pipe(plumber())
        .pipe(sass.sync({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ["last 5 version"]
        }))
        .pipe(gulp.dest("./_css"))
        .pipe(browserSync.stream());
});

gulp.task("watch", function() {
    gulp.watch("./_css/*.scss", ["css"]);
    //gulp.watch(["src/*.html", "src/js/**/*.js"], browserSync.reload)
});




gulp.task("default", ["css", "server", "watch"]);