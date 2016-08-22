const gulp = require('gulp'),
      connect = require('gulp-connect'),
      jshint = require('gulp-jshint'),
      source = require('vinyl-source-stream'),
      browserify = require('browserify');

const jsFiles = 'build/js/**/*.js';

/////////  ERROR CALLBACK   /////////
function errorLog(err){
	console.error(err.message);
	this.emit('end');
}
/////////  ERROR CALLBACK   /////////

gulp.task('jshint', () =>
  gulp.src(jsFiles)
    .pipe(jshint({'esversion': 6}))
    .pipe(jshint.reporter('default'),{verbose: true})
);

gulp.task('browserify', () =>
    browserify('./build/js/main.js')
    .bundle()
    .on('error',errorLog)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js/browser/'))
);

//dev connect server and changes
gulp.task('connect-dev', () =>
  connect.server({
		port: 8080,
    livereload: true
	})
);
gulp.task('changes-dev', () =>
gulp.src('build/**/*')
	.pipe(connect.reload())
);
//dev connect server and changes

gulp.task('dev-server', ['connect-dev', 'changes-dev'])


gulp.task('default', ['jshint', 'dev-server', 'browserify']);
