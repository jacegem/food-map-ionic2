var path = require("path");
// var realFs = require('fs')
// var gracefulFs = require('graceful-fs')
// gracefulFs.gracefulify(realFs)

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-gitbook');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-http-server');
    //grunt.loadNpmTasks('grunt-gitbook-install');

    grunt.initConfig({
        // 'gitbook-install':{
        //         input: "./",
        //         plugins: [
        //            "ad"                    
        //         ]
        //     },

        'gitbook': {
            development: {
                input: "./",
                title: "GitBook 제목",
                description: "간단한 설명",
                github: "jacegem/food-map-ionic2"
            }
        },
        'gh-pages': {
            options: {
                base: '_book',
                repo: 'https://github.com/jacegem/food-map-ionic2.git'
            },
            src: ['**']
        },
        'clean': {
            files: '_book'
        },
        'http-server': {
            'dev': {
                // the server root directory
                root: '_book',

                port: 4000,
                host: "127.0.0.1",

                showDir : true,
                autoIndex: true,
                defaultExt: "html",

                //wait or not for the process to finish
                runInBackground: false
            }
        }
    });

    grunt.registerTask('test', [        
        'gitbook',
        'http-server'
    ]);
    grunt.registerTask('publish', [        
        'gitbook',
        'gh-pages',
        'clean'
    ]);
    grunt.registerTask('install', [
        'gitbook-install'
    ]);
    grunt.registerTask('default', 'gitbook');
};