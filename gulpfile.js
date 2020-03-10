const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', () => {
    browserSync.init({
        proxy: 'localhost:3000'
    });
});

gulp.task('sass', () => {
    return gulp.src('./public/sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', () => {
    browserSync.init({
        proxy: 'localhost:3000'
    });
    // Watchers
    gulp.watch('./public/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./views/**/*.hbs', browserSync.reload);
});