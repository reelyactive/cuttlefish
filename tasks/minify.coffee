gulp = require 'gulp'

uglify = require 'gulp-uglify'
rename = require 'gulp-rename'

gulp.task 'minify', ->
  gulp.src "./dist/cuttlefish.js"
  .pipe uglify()
  .pipe rename("cuttlefish.min.js")
  .pipe gulp.dest "./dist/"
