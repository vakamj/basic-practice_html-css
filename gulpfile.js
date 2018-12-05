'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat');
 
var path = {
    build: {},
    src: {
        style: 'src/styles/*.css',
        css: 'src/styles/',
        index: 'src/templates/'
},

};
 gulp.task('default',[ 'concat', 'copy'])
gulp.task('concat', function() {
    return gulp.src(path.src.style)
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/styles/'))
});

gulp.task('copy', function() {
    return gulp.src('src/templates/**/*.*')
        .pipe(gulp.dest('build'))
});
