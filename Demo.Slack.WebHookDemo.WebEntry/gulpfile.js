// http://weblogs.asp.net/fredriknormen/setting-up-gulp-and-bower-for-a-asp-net-mvc-project-in-visual-studio-2013

var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower', function () {
	return bower({ layout: "byComponent" });
});

gulp.task('default', ['bower']);
