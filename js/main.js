	/**
	 * Created by Jarrin on 16-9-14.
	 */


require.config({
	baseUrl: 'js/',
	paths: {
		'jquery': 'libs/jquery',
		'jquery-ui': 'libs/jquery-ui',
        'ionsound': 'libs/ionsound',
		'text': 'libs/text'
	},
    shim: {
        'ionSound' : ['jquery'],
        'jquery-ui': ['jquery'],
		'ionsound' : ['jquery']
    }
});
var engine;
require(['engine'], function(Engine){
	engine = new Engine(1);
	engine.createGame("klondike").startGame();
});