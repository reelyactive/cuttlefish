gulp = require 'gulp'
babel = require 'gulp-babel'
plumber = require 'gulp-plumber'
concat = require 'gulp-concat'

gulp.task 'babel', ->
  files = [
    './src/es6/*.js'
  ]
  gulp.src files
  .pipe plumber()
  .pipe babel
      presets: [
        'es2015',
        'react'
      ]
  .pipe concat 'components.js'
  .pipe gulp.dest './src/'
