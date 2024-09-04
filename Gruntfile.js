module.exports = function(grunt) {
    grunt.initConfig({
      less: {
        development: {
          files: {
            "dist/styles/main.min.css": "src/styles/main.less"
          }
        }
      },
      uglify: {
        my_target: {
          files: {
            "dist/scripts/main.min.js": ["src/scripts/main.js"]
          }
        }
      },
      watch: {
        styles: {
          files: ["src/styles/**/*.less"],
          tasks: ["less"]
        },
        scripts: {
          files: ["src/scripts/**/*.js"],
          tasks: ["uglify"]
        }
      }
    });
  
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
  
    grunt.registerTask("default", ["less", "uglify", "watch"]);
  };