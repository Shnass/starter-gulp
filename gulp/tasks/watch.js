module.exports = function(){
	$.gulp.task('watch', function(){
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('scss'));
	})
}