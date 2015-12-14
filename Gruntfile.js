'use strict';

module.exports = function(grunt) {

    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['**/*.png'],
                    dest: 'assets/',
                    ext: '.png'
                }]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['**/*.jpg'],
                    dest: 'assets/',
                    ext: '.jpg'
                }]
            }
        },
        shell: {
            jekyll: {
                command: 'jekyll build'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    useShortDoctype: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: '_site/',
                    src: ['**/*.html'],
                    dest: '_site/'
                }]
            }
        }
    });

    // Default task.
    grunt.registerTask('build', ['htmlmin', 'imagemin']);
};
