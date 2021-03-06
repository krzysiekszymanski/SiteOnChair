var gulp = require("gulp");

var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps")
gulp.task("sass", function () {
    return gulp.src("scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("CSS"))
});
gulp.task("watch", function () {
    gulp.watch("scss/**/*.scss", ["sass"]);
});

