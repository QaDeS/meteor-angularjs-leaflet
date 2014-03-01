Package._transitional_registerBuildPlugin({
	name: "angular-leaflet",
	npmDependencies: {"angular-leaflet-directive": "0.7.3"}
});

Package.on_use(function (api) {
	api.use('leaflet', 'client');

  api.use('ngMeteor', 'client');

	api.add_files('.npm/plugin/angular-leaflet/node_modules/angular-leaflet-directive/dist/angular-leaflet-directive.js', 'client');
	api.add_files('init.js', 'client')
});
