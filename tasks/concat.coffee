gulp = require 'gulp'

concat = require 'gulp-concat'
debug = require 'gulp-debug'
path = require 'path'
plumber = require 'gulp-plumber'

gulp.task 'concat', ->
  files = [
    path.join('./src/*.js')
    path.join('./src/jsx/*.js')
    path.join('./bower_components/*.min.js')
  ]
  gulp.src files
  .pipe plumber()
  .pipe concat( parameters.component_name + '.js')
  .pipe gulp.dest './dist/'
