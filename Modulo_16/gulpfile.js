const gulp = required('gulp')


function Inicio(callback){
    setTimeout(function() {
        console.log("Olá Gulp");
        callback();
    }, 2000);
}

exports.default = gulp.series(Inicio);