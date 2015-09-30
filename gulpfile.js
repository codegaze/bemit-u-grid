// Get all the required packages
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util');



// Set the path variables
var base_path = './',
    src = base_path + '/source',
    dist = base_path + '/dist',
    paths = {  
        scss: [ src +'/*.scss',src +'/**/*.scss', src +'/**/**/*.scss']        
    };


// Compile sass to css
gulp.task('compile-sass', function () {  
  return gulp.src(paths.scss)
    .pipe(plumber(function(error) {
        gutil.log(gutil.colors.red(error.message));
        this.emit('end');
    }))
    .pipe(sass())
    .pipe(rename({dirname: dist}))
    .pipe(gulp.dest('./'));
});


// Watch files and reload browser
gulp.task('watch', function () {  
  gulp.watch(paths.scss, ['compile-sass']);
});

 

gulp.task('default', [  
  'compile-sass', 
  'watch' ]);