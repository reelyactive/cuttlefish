gulp = require 'gulp'

concat = require 'gulp-concat'
debug = require 'gulp-debug'
path = require 'path'
plumber = require 'gulp-plumber'

gulp.task 'concat', ->
  files = [
    path.join('./src/*.js')
  ]
  gulp.src files
  .pipe plumber()
  .pipe concat('app.js')
  .pipe gulp.dest './src/'
