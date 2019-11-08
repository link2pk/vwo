/*global module:false*/
module.exports = function(grunt) {
  // Load grunt tasks automatically
  require("load-grunt-tasks")(grunt);

  // Project configuration.
  grunt.initConfig({
    // the magic
    atomizer: {
      // basic
      dev: {
        options: {
          configFile: "./html/config.js"
        },
        files: [
          {
            src: ["./html/**/*.html"],
            dest: "./html/css/atomic.css"
          }
        ]
      }
    },

    // simple connect server
    connect: {
      dev: {
        options: {
          port: 3000,
          base: "html",
          open: true
        }
      }
    },

    // watch for changes and run tasks
    watch: {
      dev: {
        options: {
          livereload: true
        },
        files: ["./html/**/*.html", "./html/**/*.js", "./html/**/*.css"],
        tasks: ["atomizer", "postcss"]
      }
    },

    //post css autoprefixer
    postcss: {
      options: {
        //map: true, // inline sourcemaps

        processors: [
          //require('pixrem')(), // add fallbacks for rem units
          require("autoprefixer")({ browsers: ["last 8 versions", "ie 9"] }) // add vendor prefixes
          //require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: "./html/**/*.css"
      }
    }
  });

  // default task runs atomizer, start server and watch for changes
  grunt.registerTask("default", ["atomizer", "postcss", "connect", "watch"]);
};
