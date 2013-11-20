module.exports = function(grunt) {

	grunt.initConfig({
		nodemon: {
		  dev: {
		  	 options: {
	     		 file: 'server.js',
			  	}
			}
		}
	});

	grunt.loadNpmTasks('grunt-nodemon');
	grunt.registerTask('dev', 'nodemon');

	// grunt.registerTask('foobar', 'Log some stuff.', function() {
	// 	grunt.log.write('Logging ...').ok();
	// 	require("child_process").exec('node server.js', function(err, stdout, stderr){
	// 			grunt.log.write('Started node...').ok();
	// 	});
	// });

};