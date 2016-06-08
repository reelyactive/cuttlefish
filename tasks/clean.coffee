gulp = require 'gulp'

vinylPaths    = require 'vinyl-paths'
del           = require 'del'

# Clean the served directory
gulp.task 'clean', ->
  gulp.src './dist/*.js'
  .pipe vinylPaths(del)

gulp.task 'clean-end', ->
  gulp.src [
    './src/components.js',
    './src/app.js'
  ]
  .pipe vinylPaths(del)
