module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less:{
            development:{
                files:{
                    'main.css' : 'main.less'
                }
            },
            production:{
                options:{
                    compress: true,
                },
                files:{
                    'main.min.css' : 'main.less'
                }
            }
        },
        sass:{
            dist:{
                options:{
                    style: 'compressed'
                },
                files:{
                    'main2.min.css' : 'main.scss'
                }
            }
        },
        concurrent:{
            target:['less', 'sass', 'ola', 'mundo', 'souGrunt']
        }
    })


    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-concurrent')
    
    grunt.registerTask("ola", function(){
        const done = this.async()
        setTimeout(function (){
            console.log('Olá')
            done()
        },1500)
        
    })

    grunt.registerTask('mundo', function(){
        const done = this.async()
        setTimeout(function(){
            console.log('Mundo')
            done()
        },1500)
    })

    grunt.registerTask('souGrunt', function(){
        const done = this.async()
        setTimeout(()=>{
            console.log('Eu sou Grunt')
            done()
        },1500)
    })
    
    grunt.registerTask('default', ['concurrent'])

}