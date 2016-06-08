gulp = require 'gulp'
requireDir = require 'require-dir'
requireDir './tasks'
runSequence = require 'run-sequence'

gulp.task 'build', (done) ->
  runSequence 'clean', 'babel', 'browserify', 'clean-end', done

gulp.task 'build-dist', (done) ->
  runSequence 'clean', 'babel', 'browserify', 'minify', 'clean-end', done

