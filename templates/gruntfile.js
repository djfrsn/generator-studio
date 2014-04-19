module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
  css: {
    files: ['**/*.scss', '**/*.html'],
    tasks: ['sass'],
    options: {
      livereload: 35739,
    },
  },
},
sass: {
        dist: {
            files: {
                'css/paint.css': 'scss/paint.scss'
            }
        }
    }
});
  // init here
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  // this would be run by typing "grunt test" on the command line
  grunt.registerTask('test', ['watch']);
  
  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['watch']);
};