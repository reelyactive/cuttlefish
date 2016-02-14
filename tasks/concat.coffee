gulp = require 'gulp'

concat = require 'gulp-concat'
debug = require 'gulp-debug'
path = require 'path'
plumber = require 'gulp-plumber'

gulp.task 'concat', ->
  files = [
    path.join('./bower_components/react/react.min.js')
    path.join('./src/*.js')
    path.join('./src/js/*.js')
  ]
  gulp.src files
  .pipe plumber()
  .pipe concat( 'cuttlefish.js')
  .pipe gulp.dest './dist/'
