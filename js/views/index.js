define(['jquery','underscore','backbone'], function($,_,Backbone)
{
	return Backbone.View.extend({
		el: $('#listPersons'),
		tagName:"ul",
		initialize: function()
		{
			var that = this;
    		this._persons = [];
		},
		render: function(persons)
		{
			var list = $(this.el);
			persons.each(function(person) 
			{
		    	list.append('<li>'+person.get("firstname")+' '+person.get("lastname")+'</li>');
		    });
		}


	});

});