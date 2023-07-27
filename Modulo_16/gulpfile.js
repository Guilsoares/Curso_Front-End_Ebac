const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:"compressed"
        }))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest('./build'))
}


function numeroUm(callback){
    setTimeout(function(){
        console.log("Olá!")
        callback()
    }, 15000)
}

function numeroDois(callback){
    setTimeout(function(){
        console.log("Tudo bem?")
        callback()
    },15000)
}

exports.default = gulp.series(numeroUm, numeroDois)
exports.n = gulp.parallel(numeroUm, numeroDois)
exports.s = compilaSass
exports.watch = function(){
    gulp.watch("./source/styles/*.scss", {ignoreInitial:false}, gulp.series(compilaSass))
}