gulp = require 'gulp'

uglify = require 'gulp-uglify'

gulp.task 'minify', ->
  gulp.src "./dist/*.js"
  .pipe uglify()
  .pipe gulp.dest "./dist/"
