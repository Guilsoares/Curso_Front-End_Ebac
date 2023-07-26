const gulp = require('gulp')

function numeroUm(callback){
    setTimeout(function(){
        console.log("Olá!")
        callback()
    }, 2000)
}

function numeroDois(callback){
    console.log("Tudo bem?")
    callback()
}

exports.default = gulp.series(numeroUm, numeroDois)
exports.n = gulp.parallel(numeroUm, numeroDois)