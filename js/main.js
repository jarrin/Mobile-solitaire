/**
 * Created by Jarrin on 16-9-14.
 */


	/*
var currentGame = undefined;

jQuery(document).ready(function($) {

	currentGame = new game("klondike1");
});
*/


require.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'libs/jquery'
	}
});

// Load modules and use them
require(['engine'], function(Engine){
	engine = new Engine();
});