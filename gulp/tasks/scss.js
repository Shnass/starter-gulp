module.exports = function(){
	$.gulp.task('scss', function(){
		return $.gulp.src('src/static/scss/main.scss')
			.pipe($.gp.sourcemaps.init())
			.pipe($.sass({}))
			.pipe($.gp.autoprefixer({
				cascade: false
			}))
			.on("error", $.gp.notify.onError({
				title: 'style'
			}))
			.pipe($.gp.csso())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/static/css'))
			.pipe($.bs.reload({
				stream:true
			}))
		})
}
