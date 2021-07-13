'use strict';

const gulp = require('gulp'),
	  gp = require('gulp-load-plugins')(),
	  sass = require('gulp-sass')(require('sass')),
	  browserSync = require('browser-sync').create();

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	sass: require('gulp-sass')(require('sass')),
	bs: require('browser-sync').create(),
	path: {
		tasks: require('./gulp/config/tasks.js')
	}
}

$.path.tasks.forEach(function(taskPath){
	require(taskPath)();
})

$.gulp.task('default',$.gulp.series(
	$.gulp.parallel('pug','scss','scripts'), 
	$.gulp.parallel('watch','serve')
));