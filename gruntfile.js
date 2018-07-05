module.exports = function (grunt) {

grunt.initConfig({
	sass: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
				'css/main.css': 'scss/main.scss'
			}
		}
	}
});

  grunt.loadNpmTasks('grunt-sass');

grunt.registerTask('default', ['sass']);
}