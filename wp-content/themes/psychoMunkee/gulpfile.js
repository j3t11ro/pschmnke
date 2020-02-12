var gulp   	= require('gulp'),
    sass   	= require('gulp-sass'), 
    uglify 	= require('gulp-uglify'),
    rename 	= require('gulp-rename'),
	concat = require('gulp-concat'),
    livereload  = require('gulp-livereload');





//Scripts config

var config = {
	scripts: [
         // Bootstrap
		'./assets/js/vendor/bootstrap.js',
		// PagePiling
		'./assets/js/vendor/jquery.pagepiling.js',
		// Rotator
		'./assets/js/vendor/jquery.simple-text-rotator.min.js',
		// Tilt - from node
		 './node_modules/tilt.js/dest/tilt.jquery.js',
		// Any Custom Scripts
		'./assets/js/app/**/*.js',
	]
};





//Sass config
gulp.task('sass', function () {
  return gulp.src('./assets/sass/style.scss')
			.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(livereload())
			.pipe(gulp.dest('./'));
});

//Sass config
gulp.task('scripts', function() {
  return gulp.src(config.scripts)
			.pipe(concat('scripts.js'))
			.pipe(gulp.dest('./assets/js/'))
			.pipe(uglify())
			.pipe(rename({ extname: '.min.js' }))
            .pipe(livereload())
			.pipe(gulp.dest('./assets/js/'));
        
});

gulp.task('watch', function () {
	livereload.listen(35729);
	gulp.watch('**/*.php').on('change', function(file) {
	      livereload.changed(file.path);
	  });
	gulp.watch('./assets/sass/**/*.scss', ['sass']);
	// don't listen to whole js folder, it'll create an infinite loop
	gulp.watch( ['./assets/js/**/*.js', '!./assets/js/*.js'], ['scripts']);
});

gulp.task('default', [ 'sass', 'scripts', 'watch']);
