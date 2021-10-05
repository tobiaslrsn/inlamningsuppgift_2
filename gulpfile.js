var gulp = require ("gulp");
var sass = require ("gulp-sass");

gulp.task ("compile", function(){
    return gulp
    .src ("scss/main.scss")
    .pipe (sass())
    .pipe (gulp.dest("css"));
});

gulp.task ("watch-scss", function(){
    gulp.watch ("scss/main.scss", gulp.series ("compile"));
});

gulp.task ("default", gulp.series ("compile","watch-scss"), function(){});