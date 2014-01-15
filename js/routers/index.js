define(['jquery','underscore','backbone','views/index','collections/persons'], function($,_,Backbone,viewIndex,Persons)
{
	return Backbone.Router.extend({
		initialize: function()
		{
			Backbone.history.start();
		},
        routes: {
                '': 'home'
        },
        'home': function()
        {
        	var people = 	[{id:1,firstname:"juan",lastname:"Carrera"},
        					 {id:2,firstname:"Felipe",lastname:"Moya"}];
        	var persons = new Persons(people);
        	this.viewIndex = new viewIndex();
        	this.viewIndex.render(persons);
        }
	});

});