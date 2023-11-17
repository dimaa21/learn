const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

const browserSync = require('browser-sync').create();


// Таск, який буде перетворювати SASS в CSS
gulp.task('sassToCSS', function() {
	return gulp.src('app/scss/*.scss') 
	.pipe(sass({ 
		errorLogToConsole: true, // відслідковування помилок в консолі
		outputStyle: 'compressed' // для мініфікація СSS файлу
	}))
	.on('error', console.error.bind(console)) // вивід помилок в консоль
	.pipe(rename({suffix: '.min'})) // в який файл буде компіляція
	.pipe(gulp.dest('public/css/')); // папка, в яку файл буде поміщений
});

gulp.task('serve', function() {
	browserSync.init({ // Ініціалізуємо ф-ц.
		server: 'public' // public - буде доступне всім
	});
	// будуть відслідковувати всі файли в папці public 
	// При зміні в цих файлах, буде відбуватись перезагрузка браузеру
	browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('watchFiles', function() {
	gulp.watch('app/scss/*.scss', gulp.series('sassToCSS')); // Файли, які ми відслідковуємо
});

gulp.task('default', gulp.parallel('watchFiles', 'serve'));