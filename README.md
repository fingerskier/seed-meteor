Meteor.js Seed Project
======================

A bare-bones Meteor project containing common libs I like to use.


Usage
-----

	1) Create a new Github repo
	2) Clone it
	3) Copy files from this project to the new repo
	4) Commit & push


Notes
-----

	Structure of a Meteor app is pretty fluid.  In general I setup Mongo collections in ./model.js, publishers in ./server/server/js, and subscribers in ./client/client.js


Included Packages
-----------------

	* stylus
	* accounts (base, password, ui-unstyled)
	* appcache
	* browser-policy
	* spiderable
	* iron-router
	
	*** see docs.meteor.com for more info on these packages; the spiderable package [currently] requires PhantomJS.


External Libs
-------------

	* Bootstrap 3
	* jQuery 2
	* Modernizr (custom build)
	* ChartJS