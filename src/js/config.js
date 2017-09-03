require.config({
	baseUrl:'src/js',
	paths:{
		'angular': 'libs/angular',
		'jquery': 'libs/jquery',
		'ui.router': 'libs/angular-ui-router',
		'echarts': 'libs/echarts.min',
		'datetimepicker':'libs/bootstrap-datetimepicker.min'
	},
	shim:{
		"jquery": {
			exports: "$"
		},
		"datetimepicker":{
			deps: ['jquery'],
            exports:'datetimepicker'
		},
		'angular':{
            deps: ['jquery'],
            exports:'angular'//外部调用时的名称
		},
		'ui.router':{
			deps:['angular']
		},
		'echarts':{
			exports:'echarts'
		}
	}
})