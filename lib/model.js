Stuff = new Meteor.Collection('stuff');

if (Meteor.isServer) {
	Meteor.publish('allStuff', function () {
		return Stuff.find();
	});
}

if (Meteor.isClient) {
	Meteor.subscribe('stuff');
}
