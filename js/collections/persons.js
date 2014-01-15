define(["underscore","backbone","models/person"], function(_,Backbone,Person)
{
	return Backbone.Collection.extend({
		model:Person
	});
});