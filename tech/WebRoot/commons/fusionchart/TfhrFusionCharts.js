TfhrFusionCharts = {}
/**
 * @config.json json数据
 * @config.json.data
 * @config.chart 
 * @config.chart.properties
 * @config.chart.divid  
 * @config.chart.type
 * @config.chart.fn
 * @config.chart.width
 * @config.chart.height
 * @config.chart.styles
 * @config.chart.trendLines
 * @config.chart.data
 * @config.chart.data.category
 * @config.chart.data.dataset
 * @config.chart.data.set
 * @config.chart.others
 * @config.chart.styles.other
 * @config.chart.trendLines.others
 */
TfhrFusionCharts.jsonToChart = function(config) {
	if(!config.chart) {alert("chart对象为空");return ;}
	if(!config.chart.type){ alert('请输入类型');return ;}
	var chart = buildChart ;
	
	chart += buildEndTag("chart") ;
	function buildChart() {
		var chart = "<chart" ;
		var chartDefaultConfig=[["ChartNoDataText","没有数据显示"],["baseFontSize","15"]];
		var chartconfig=new Array;
		if(config.chart.properties) {chartconfig = (config.chart.properties)?config.chart.properties:chartconfig}
		for(var i=0;i<chartDefaultConfig.length;i++){chartconfig.push(chartDefaultConfig[i]);}
		for(var i=0;i<chartconfig.length;i++){
	    	chart+=chartconfig[i][0]+'="'+chartconfig[i][1]+'" ';
	    }
	    chart+=" >";
		return chart ;
	}
	function buildCategory() {
		var category = "<categories>" ;
		if(config.chart.category) {}
		category += buildEndTag("categories") ;
		return category ;
	}
	function buildSingleDataSet() {
		var dataSet = "" ;
	}
	function buildEndTag(tag) {return "<"+tag+"/>"}
}