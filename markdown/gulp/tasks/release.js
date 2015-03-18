'use strict';
var gulp = require('gulp');
var Builder = require('node-webkit-builder');

gulp.task('release', ['build'], function() {
  var nw = new Builder({
    files: ['./dist/**'],
    buildDir: './release/bin',
    cacheDir: './release/nw',
    macIcns: './dist/icon/app.icns',
    platforms: ['osx64']
  });

  nw.on('log', console.log);

  return nw.build().then(function() {
    console.log('release done!');
  });
});
