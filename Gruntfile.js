module.exports = function(grunt){
    var pkg = grunt.file.readJSON("package.json");
    
    // load Grunt plugins from NPM
    grunt.loadNpmTasks("grunt-angular-templates");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-karma");
    grunt.loadNpmTasks("grunt-http-server");

    // configure plugins
    grunt.initConfig({
        ngtemplates: {
            app: {
                options: {
                    module: "angularjs.testing",
                    htmlmin:  { 
                        collapseWhitespace: true, 
                        collapseBooleanAttributes: true 
                    }
                },
                src: "app/**/*.html",
                dest: "dist/templates.js"
            }
        },

        concat: { // task
            dist: { // sub-task
                files: {
                    "dist/app.js": [
                        // vendor
                        "node_modules/angular/angular.js",
                        "node_modules/angular-ui-router/release/angular-ui-router.min.js",

                        // app
                        "app/**/*.js"
                    ]
                }
            }
        },

        uglify: { // task
            my_target: { // sub-task
                options: {
                    sourceMap: true
                },
                files: {
                    "dist/app.min.js": [
                        "dist/app.js"
                    ]
                }
            }
        },

        watch: { // task
            options: {
                livereload: true // true || portNumber, defaults to 35729
            },
            scripts: { // sub-task
                files: [
                    "app/**/*.js"
                ],
                tasks: [
                    "concat:dist"
                ]
            },
            views: {
                files: [
                    "app/**/*.html"
                ],
                tasks: [
                    "ngtemplates:app"
                ]
            }
        },

        karma: { // task
            unit: { // sub-task
                configFile: "karma-unit-config.js"
            }
        },

        "http-server": {
            dev: {
                port: 9000,
                ext: "html", // server default file extension
                logFn: function(req, res, error) { }, // override the default request print in the console
                runInBackground: true,
                openBrowser: true
            }
        }
    });

    // define tasks
    grunt.registerTask("concat-and-uglify", ["concat", "uglify"]);
    grunt.registerTask("default", ["ngtemplates", "concat", "http-server", "watch"]);
};