Package.describe({
	name: "okworld26:meteor-accounts-templates",
	summary: "Account templates for Meteor, Forked from danimal:accounts-templates, only translate Language.",
	version: "1.0.9",
	git: "https://github.com/okworld26/meteor-accounts-templates.git"
});

Package.onUse(function(api) {
	api.versionsFrom('1.2');
	api.use(['accounts-base', 'templating'], 'client');
	api.use('fortawesome:fontawesome@4.4.0', 'client')
	api.addFiles([
	  	'client/validation.js',
		'client/aChangePassword.html',
		'client/aChangePassword.js',
		'client/aCreateAccount.html',
		'client/aCreateAccount.js',
		'client/aForgotPassword.html',
		'client/aForgotPassword.js',
		'client/aSignin.html',
		'client/aSignin.js',
		'client/socialButtons.html',
		'client/socialButtons.js'
	], 'client');
});
