'use strict';
var gulp = require('gulp');
var sketch = require('gulp-sketch');
var iconutil = require('gulp-iconutil');
var config = require('../config').icon;


gulp.task('icon', function() {
  return gulp.src(config.src)
    .pipe(sketch({
      export: 'artboards',
      formats: 'png',
      scales: '1.0, 2.0'
    }))
    .pipe(iconutil(config.output))
    .pipe(gulp.dest(config.dest));
});
