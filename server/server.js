Meteor.publish('allStuff', function () {
	return Stuff.find();
});

Meteor.startup(function () {
	// ...
});
