gulp = require 'gulp'

vinylPaths    = require 'vinyl-paths'
del           = require 'del'

# Clean the served directory
gulp.task 'clean', ->
  gulp.src './dist/'
  .pipe vinylPaths(del)
