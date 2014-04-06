
/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-bower-install-simple");
    grunt.loadNpmTasks("grunt-typopro");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        "bower-install-simple": {
            options: {
                color:       true,
                production:  true,
                directory:   "bower_components"
            }
        },
        copy: {
            "sanitize": {
                src: [ "bower_components/sanitize.css/dist/sanitize.css" ],
                dest: "lib/sanitize/sanitize.css"
            },
            "jquery": {
                src: [ "bower_components/jquery/dist/jquery.js" ],
                dest: "lib/jquery/jquery.js"
            },
            "gridless": {
                src: [ "bower_components/gridless/predef/eg12.css" ],
                dest: "lib/gridless/eg12.css"
            }
        },
        typopro: {
            options: {
                directory: "lib/typopro",
                specimen: false,
                mergecss: true,
                fonts: [ "Roboto", "Journal" ]
            }
        },
        clean: {
            clean:     [ "lib" ],
            distclean: [ "node_modules", "bower_components" ]
        }
    });

    grunt.registerTask("default", [ "bower-install-simple", "copy", "typopro" ]);
};

