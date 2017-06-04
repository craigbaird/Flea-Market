module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      scripts: {
        expand: true,
        cwd: 'client/scripts/',
        src: ['controllers/bank.js',
          'controllers/buy.js',
          'controllers/sell.js',
          'factories/fleaMarketService.js',
          'client.js'],
        dest: 'server/public/scripts/'
      },
      html: {
        expand: true,
        cwd: 'client/views',
        src: ['index.html'],
        dest: 'server/public/views/'
      },
      css: {
        expand: true,
        cwd: 'client/styles',
        src: ['style.css'],
        dest: 'server/public/styles/'
      },
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist/',
        src: ['css/bootstrap.css',
              'js/bootstrap.js'],
        dest: 'server/public/vendors/bootstrap/'
      },
      angular: {
        expand: true,
        cwd: 'node_modules/angular/',
        src: ['angular.js',
              'angular.min.js',
              'angular.min.js.map'],
        dest: 'server/public/vendors/angular/'
      }
    },
    watch: {
      files: [
        'client/**/*.*',
        'client/**/**/*.*'
      ],
      tasks: ['copy']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'watch']);
};
