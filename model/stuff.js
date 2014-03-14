Stuff = new Meteor.Collection('stuff');

// Publisher is instantiated in server/server.js

Stuff.allow({
	insert: function (userId, doc) {
		//...
	},
	update: function (userId, doc, fields, modifier) {
		//...
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['owner'],
	transform: function () {
		//...
	}
});

Stuff.deny({
	insert: function (userId, doc) {
		//...
	},
	update: function (userId, doc, fields, modifier) {
		//...
	},
	remove: function (userId, doc) {
		//...
	},
	fetch: ['locked'],
	transform: function () {
		//...
	}
});

Meteor.methods({
	addStuff: function (stuffObj) {
		// ...
	}
});