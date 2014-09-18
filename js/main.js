	/**
	 * Created by Jarrin on 16-9-14.
	 */


require.config({
	baseUrl: 'js/',
	paths: {
		jquery: 'libs/jquery'
	}
});

require(['engine'], function(Engine){
	engine = new Engine();
});