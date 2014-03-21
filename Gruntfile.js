'use strict';
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        // watch our project for changes
        watch: {
            compass: {
				files: ['scss/*.{scss,sass}'],
                tasks: ['compass']
            },
            livereload: {
                options: { livereload: true },
                files: ['stylesheets/screen.css', '**/*.html', '**/*.php', 'images/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },
        // style (Sass) compilation via Compass
        compass: {
     		dist: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        }
    });

    // register task
    grunt.registerTask('default', ['watch']);

};