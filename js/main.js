	/**
	 * Created by Jarrin on 16-9-14.
	 */


require.config({
	baseUrl: 'js/',
	paths: {
		'jquery': 'libs/jquery',
        'animate_from_to': 'libs/jquery-animate-from-to'
	},
    shim: {
        'animate_from_to': ['jquery']
    }
});

require(['engine'], function(Engine){
	var engine = new Engine();
    console.log(engine);
    engine.startGame();
});