module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		traceur: {
			options: {
				includeRuntime: true,
				traceurOptions: '--experimental --source-maps'
			},
			'app': {
				files: {
					'public/scripts/build/trace.js': ['public/scripts/**/*.js']
				}
			}
		},

		watch: {
			scripts: {
				files: ['public/scripts/*.js'],
				tasks: ['traceur'],
				options: {
					spawn: false
				},
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-traceur-simple');

	grunt.registerTask('default', ['traceur' ,'watch']);
};