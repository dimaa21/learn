const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css'); // мініфікація CSS файлів
const uglify = require('gulp-uglify'); // мініфікація JS файлів
var pipeline = require('readable-stream').pipeline;
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');

const browserSync = require('browser-sync').create();

// Вказуємо назву таску, після того вказуємо ф-ц. (callback), тому що це дія якби буде робитись після завершення таску 
gulp.task('sayHello', function(callback) {
	console.log('Hello');
	callback(); // Звертаємось до ф-ц. і її викликаємо 
});

gulp.task('second-task', function(callback) {
	console.log('Hello 2');
	callback(); // Звертаємось до ф-ц. і її викликаємо 
});

// За доп. цього таска, ми будемо копіювати файлу з одноєї папки і в іншу
// return - ключове слово, яке щось повертає
gulp.task('clone-files', function() {
	return gulp.src('img/**/*.*') // Вибираємо файли всі з папки файли, з будь-якої назвою і будь-яким розширенням  
		.pipe(gulp.dest('app/')); // Pipe - функція, яка чекає виконання попередньої ф-ц. і обробляє наступну ф-ц.
});

// Ф-ц. для мініфікації CSS файлів
gulp.task('minifyCSS', function() {
	return gulp.src('./app/css/*.css') // Вибираємо файли всі з папки файли, з будь-якої назвою і будь-яким розширенням
		.pipe(cleanCSS())   
		.pipe(gulp.dest('./public/css/')); // Pipe - функція, яка чекає виконання попередньої ф-ц. і обробляє наступну ф-ц.
});

// Ф-ц. для мініфікації JS файлів
gulp.task('minifyJS', function(done) {		
  	return pipeline( 
        gulp.src('app/js/*.js'), // беремо всі js файли
        uglify(), // мініфікуємо їх
        gulp.dest('public/js/'), // переносимо у вказану папку 
        done 
  );
});

// Ф-ц. автопрефіксера CSS файлів
gulp.task('autoPrefixCSS', function() {		
  	return gulp.src('./app/css/*.css') // беремо всі js файли
        .pipe(autoprefixer({ // вказуємо ф-ц.  
        	overrideBrowserslist: ['last 20 versions'], // Вибираємо останні 20 версій браузерів, були актуальні
        	cascade: false
        }))
        .pipe(cleanCSS()) 
        .pipe(gulp.dest('./public/css/')); // переносимо у вказану папку 
});        

// Ф-ц. для видалення файлів 
gulp.task('deleteFiles', function() {		
  	return del('public/css/');
});

// Ф-ц. для автоматичного оновлення сторінки 
gulp.task('serve', function() {
	browserSync.init({ // Ініціалізуємо ф-ц.
		server: 'public' // public - буде доступне всім
	});
	// будуть відслідковувати всі файли в папці public 
	// При зміні в цих файлах, буде відбуватись перезагрузка браузеру
	browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});


// Ф-ц. для відслідковування змін у файлах
gulp.task('watchFiles', function() {
	gulp.watch('app/css/*.css', gulp.series('autoPrefixCSS')); // Файли, які ми відслідковуємо
	gulp.watch('app/js/*.js', gulp.series('minifyJS')); // Файли, які ми відслідковуємо
});

// Щоб виконати таск тільки один раз 
gulp.task('watch', async function() {
	return gulp.series('watchFiles');
});

gulp.task('build', gulp.series('second-task', 'deleteFiles', 'autoPrefixCSS', 'minifyJS'));
gulp.task('default', gulp.parallel('watchFiles', 'serve'));