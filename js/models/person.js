define(["underscore","backbone"],function(_,Backbone)
{
	return Backbone.Model.extend({
		defaults:{
			id:0,
			firstname:"John",
			lastname:"Doe"
		}
	});
});



