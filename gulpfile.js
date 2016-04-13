var gulp = require('gulp'),
    less = require('gulp-less');
    cssmin = require('gulp-minify-css');
 
gulp.task('testLess', function () {
    //编译src目录下的所有less文件
    //除了reset.less和test.less（**匹配src/less的0个或多个子文件夹）
    gulp.src(['src/less/*.less', '!src/less/**/{reset,test}.less']) 
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('src/css'));
});