gulp = require 'gulp'
browserify = require 'browserify'
source = require 'vinyl-source-stream'

gulp.task 'browserify', ->
  return browserify './src/app.js'
  .bundle()
  .pipe(source('cuttlefish.js'))
  .pipe(gulp.dest('./dist/'))
