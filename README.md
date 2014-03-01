# Leaflet for Angular

Use Leaflet with Angular on Meteor.

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add angular-leaflet`
3. add the leaflet tag to your HTML:
	<div ng-controller="MapCtrl">
		<leaflet default="defaults" center="center" width="100%" height="400px"></leaflet>
	</div>
4. this example references a separate controller you have to implement in your Javascript:
	Package.ngMeteor.ngMeteor.controller("MapCtrl", ['$scope', function($scope) {
		$scope.defaults = {};
		$scope.center = {
			lat: 51.505,
			lng: -0.09,
			zoom: 8
		};
	}]);

More info at https://github.com/tombatossals/angular-leaflet-directive and http://leafletjs.com/

## License

This package is licensed with the MIT license.

## Contributors
- [Michael Klaus](https://github.com/QaDeS/)
