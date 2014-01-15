requirejs.config({
	baseUrl:'js',
    paths: {
    	'jquery': 'vendors/jquery-min',
        'underscore': 'vendors/underscore-min',
        'backbone':'vendors/backbone-min',
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
    }
});


require(['app'],function(App)
{
	App.initialize();

});