TfhrFusionChart={}

/**
 *图片的调用方法
 * example
 *var mconfig = [["SY","上月"],["SSY","上上月"],["QN","去年"],["JN","今年"],["MN","明年"]];
 *var ex = new Tfhr.xmlchartob({type:21,ds:m_dschart,divid:'ptpie-chart',single:{sid:"PID",sname:"PNAME",svalue:"PVALUE"},multi:{mname:"mname",mconfig:mconfig}});
 *
 *
 * config
 * @config.type      
 *    single  1  column  2 pie  3 line  4 bar  5 area   6 doughnut
 *    multi   11 column        13 line 14 bar 15 area 
 *    stacket 21 column                24 bar 25 area
 * @config.local     *.xml data
 * @config.dataurl    dataurl
 * @config.ds        ds  data   
 * @config.figure    defalut 3
 * @config.chart     default <chart>
 * @config.chartconfig   [["formatNumber","0"],["baseFontSize","15"],["formatNumberScale","0"]]
 * @config.divid   divid 
 * @config.fn        function name  object.functionname
 * @config.flaname   flashname
 * @config.cid       default chartid
 * @config.width     default 350
 * @config.height    default 230
 * @config.single.sid       default SID
 * @config.single.sname     default SNAME
 * @config.single.svalue    default SVALUE
 * @config.multi.mname      default mname
 * @config.multi.mconfig    //default all
 *          examples        [["SY","上月"],["SSY","上上月"],["QN","去年"]]
 * @config.stacked.sname      default mname
 * @config.stacked.sconfig    //default all
 *          examples        [[["SY","上月"],["SSY","上上月"]],[["QN","去年"],["XYN","下一年"]]]
 * @config.colorconfig  ["#000000","#FFFFFF"]
 * */
TfhrFusionChart.xmlchartob =function(config){
	if(!config.type){ alert('请输入类型');return}
	var flaname=getFlashName(config.type);//根据类型获得相应的flash的名字
	flaname= (config.flaname)?config.flaname:flaname;
	if(config.figure){flaname=flaname.replace(/3/,2)}
	var chartob = new FusionCharts(_Global.ContextPath+"/download/FusionCharts/"+flaname+".swf", (config.cid)?config.cid:"chartid", (config.width)?config.width:"350",(config.height)?config.height:"230", "0", "0");
	
	//加载xml 文件数据的方法 
	if(config.local){
		chartob.setDataURL(config.dataurl);
		chartob.render(config.divid);
		return
	}
    if(!config.ds){return}
    if(!config.divid){return}
    var ds =config.ds;
    var chart ="<chart ";
    var chartDefaultConfig=[["ChartNoDataText","没有数据显示"],["baseFontSize","15"]];
    var chartconfig=new Array;;
    var colorArray=(config.colorconfig)?config.colorconfig:[];
    //如果配置存在
    if(config.chartconfig){chartconfig =(config.chartconfig)?config.chartconfig:chartconfig;}
    //根据默认配置文件循环,向配置文件中赋配置属性
    for(var i=0;i<chartDefaultConfig.length;i++){
    	chartconfig.push(chartDefaultConfig[i]);
    }
    //根据配置文件循环,向chart赋属性
    for(var i=0;i<chartconfig.length;i++){
    	chart+=chartconfig[i][0]+'="';
    	chart+=chartconfig[i][1]+'" ';
    }
    chart+=" >";
    var jsfn;//javascript连接拼串的变量
    //如果配置存在chart,则以配置chart字符串为准,并且替换之前的chart配置
    var piestring =(config.chart)?config.chart:chart;
    //方法名字
    if(config.fn){var fn =(config.fn)?config.fn:"chartcallback";}
    
    var flaname=getFlashName(config.type);//根据类型获得相应的flash的名字
    if(config.type<10){createSingle();}//调用单层方法
    if(config.type>10&&config.type<50){createMulti();}//调用双层方法
    if(config.type>50){createStacked();}//调用嵌套双层方法
    piestring +='</chart>'
    chartob.setDataXML(piestring);
	chartob.render(config.divid);
	  /**
	   * 一层数据的的方法  <set label="" value="" >
	  * */
    function createSingle(){
        config.single=(config.single)?config.single:{}
        var sid = (config.single.sid)?config.single.sid:"SID";//id
        var sname =(config.single.sname)?config.single.sname:"SNAME";//name
        var svalue =(config.single.svalue)?config.single.svalue:"SVALUE";//value
        //根据行数循环 拼写字符串
        for(var i=0;i<ds.getRowCount();i++){
            var nodeList=ds.getRowByIndex(i);//获得当前行
            var nid = ds.getItem(i,sid);
            var ndname =ds.getItem(i,sname);
            
            var ndvalue =ds.getItem(i,svalue);
            if(parseFloat(ndvalue)==0){continue;}
            jsfn = fn+"('"+i+"')";
            //jsfn = fn+"('"+escape(ndname)+"')";
            piestring += '<set label="'+ndname+'" value="'+ndvalue+'"';
            if(colorArray[i]){piestring += " color='"+colorArray[i]+"' ";}
            if(config.fn){piestring += ' link="JavaScript:'+jsfn+';" ';}
            piestring += '  />';
        }
    }
    /**
     * 俩层数据的方法
     * 
     * <categories>
     *    <category label="" /> 
     *  </categories>
     * <dataset seriesName="">
     *     <set value="" /> 
     *  </dataset>
     * */
    function createMulti(){//根据列循环alert(nodeList.getItemCount())
        if(!config.multi){return}
        if(!config.multi.mconfig){return}
        var mname =(config.multi.mname)?config.multi.mname:'mname';
        
        var dataconfig=config.multi.mconfig;
        //根据配置列循环  
        for(var i=0;i<dataconfig.length+1;i++){//ds.getColumnCount()
       	    //增加节点 如果为第一列则增加<categories> 否则增加<dataset>
       	    if(i==0){
                piestring +="<categories>";
            }else{
            	//如果大于40则确定哪条为线
            	if(config.type>40&&(i==dataconfig.length)){
            		piestring +="<dataset seriesName='"+dataconfig[i-1][1]+"' parentYAxis='S'>";
            	}else if (config.type<40&&config.type>30&&(i==dataconfig.length)){
            	    piestring +="<dataset seriesName='"+dataconfig[i-1][1]+"' renderAs='Line'>";
            	}else{
            		piestring +="<dataset seriesName='"+dataconfig[i-1][1]+"'";
            		if(colorArray[i]){piestring += " color='"+colorArray[i]+"' ";}
            		piestring+=" >";
            	}
                
            }
            //根据行循环
            for(var j =0;j<ds.getRowCount();j++){
                if(i==0){//如果为第一列则为category 
                    if(mname.indexOf(",")<0){
                    	piestring +="<category label='"+ds.getItem(j,mname)+"'/>";
                    }else{
                    	var mnameArray=mname.split(",");
                    	piestring +="<category label='"+ds.getItem(j,mnameArray[0])+"/"+ds.getItem(j,mnameArray[1])+"'/>";
                    }
                    
                }else{
                //获得每列相对应行的值
                    piestring +="<set value='"+ds.getItem(j,dataconfig[i-1][0])+"' ";//获得行的数
                    jsfn = fn+"('"+j+"','"+dataconfig[i-1][0]+"')";
                    if(config.fn)piestring += ' link="JavaScript:'+jsfn+';" ';
                    piestring += '  />';
                }
            }
            if(i==0){//补充</>  如果为第一列则拼写category 
                piestring +="</categories>";
            }else{
                piestring +="</dataset>";
            }
        }
    }
    function createStacked(){
    	if(!config.stacked){return}
        if(!config.stacked.sconfig){return}
        var sname =(config.stacked.sname)?config.stacked.sname:'sname';
        var sconfigArray=config.stacked.sconfig;
        piestring += '<categories>';
        for(var i=0;i<ds.getRowCount();i++){
        	piestring += '<category label="'+ds.getItem(i,sname)+'"/>';
        }
        piestring += '</categories>'
        //根据总列dataset配置循环
        for(var x=0;x<sconfigArray.length;x++){
        	piestring += '<dataset>';
        	var stackConfig =sconfigArray[x];
        	//根据各个列的dataSet配置循环
        	for(var y=0;y<stackConfig.length;y++){
        		piestring += '<dataSet seriesName="'+stackConfig[y][1]+'">';
        		//根据ds的行数循环
        		for(var z=0;z<ds.getRowCount();z++){
        			piestring += '<set value="'+ds.getItem(z,sconfigArray[x][y][0])+'"/>';
        		}
        		piestring += '</dataSet>';
        	}
        	piestring += '</dataset>';
        }
    }
    /**
     * 根据类型返回flash名称 
     * */
    function getFlashName(type){
        if(type == 1){return "Column3D"}
        if(type == 2){return "Pie3D"}
        if(type == 3){return "Line"}
        if(type == 4){return "Bar2D"}
        if(type == 5){return "Area2D"}
        if(type == 6){return "Doughnut3D"}
        if(type == 11){return "MSColumn3D"}
        if(type == 13){return "MSLine"}
        if(type == 14){return "MSBar3D"}
        if(type == 15){return "MSArea"}
        if(type == 21){return "StackedColumn3D"}
        if(type == 24){return "StackedBar3D"}
        if(type == 25){return "StackedArea2D"}
        if(type == 25){return "StackedArea2D"}
        if(type == 33){return "MSColumnLine3D"}
        if(type == 46){return "StackedColumn3DLineDY"}
        if(type == 51){return "MSStackedColumn2D"}
    }
}
/**
 * 小部件的调用方法  如仪表
 *
 * config 
 * @config.type      
 *
 * @config.local     *.xml data
 * @config.dataurl    dataurl
 * @config.ds        ds  data   
 * @config.chart     default <chart>
 * @config.divid   divid 
 * @config.fn        function name  default chartcallback
 * @config.flaname   flashname
 * @config.cid       default chartid
 * @config.width     default 350
 * @config.height    default 230
 * @config.angular.range   [['column','color'],[]]
 * @config.angular.dsnumber   dsnumber
 * @config.angular.valueArray   [['valuecolumn1'],['valuecolumn1']]
 * */
TfhrFusionChart.xmlwidgetob = function(config){
	if(!config.type){ alert('请输入类型');return}
	if(!config.angular){return};
	var ds =config.ds;
	var flaname=getFlashName(config.type);//根据类型获得相应的flash的名字
	flaname= (config.flaname)?config.flaname:flaname;
	var chartob = new FusionCharts(_Global.ContextPath+"/download/FusionCharts/"+flaname+".swf", (config.cid)?config.cid:"chartid", (config.width)?config.width:"350",(config.height)?config.height:"230", "0", "0");
	
	var piestring ;
	if(config.type<10){createwidget();}//调用 层方法
    piestring +='</Chart>';
    chartob.setDataXML(piestring);
	chartob.render(config.divid);
    /**
     * 仪表的方法
     * */
     
    function createwidget(){
    	var range = config.angular.range;
    	//拼写默认<chart>
        if(config.chart){
    	    piestring =config.chart;
        }else{
        	var e =ds.getItem(config.angular.dsnumber,range[range.length-1][0]);
    	    piestring = " <Chart gaugeStartAngle='240' gaugeEndAngle='-60' ";
        	piestring += "upperLimit='"+ds.getItem(config.angular.dsnumber,range[range.length-1][0])+"' >";
        }
        piestring+="<colorRange>";
        //拼写 colorRange(各分段的范围) 的串
        for(var i=0;i<range.length;i++){
            if(i==0){
                piestring+="<color minValue='"+0+"'";
            }else{
    	        piestring+="<color minValue='"+ds.getItem(config.angular.dsnumber,range[i-1][0])+"'";
            }
            piestring+=" maxValue='"+ds.getItem(config.angular.dsnumber,range[i][0])+"'";
            if(range[i][1] != undefined )piestring+=" code='"+range[i][1]+"'";
            piestring+=" />"
        }
        piestring+="</colorRange>";
        piestring+="<dials> ";
        var valueArray =config.angular.valueArray;
        for(var j = 0;j<valueArray.length;j++){
        	piestring+="<dial value='"+ds.getItem(config.angular.dsnumber,valueArray[j][0])+"'";
        	piestring+=" /> ";
        }
        piestring+=" </dials> "
        
        
    }
    /**
     * 根据类型返回flash名称 
     * */
    function getFlashName(type){
        if(type == 1){return "AngularGauge"}
    }
}

/**
 * 向table每行加入图片
 * config
 * @config.tableid   tableid
 * @config.ds     ds  data
 * @config.type   type
 * @config.flaname  flashname 
 * @config.linewar.lcolarray    ds column example [col1,col2]
 * @config.linewar.colnumarray
 * */
TfhrFusionChart.rendertable=function(config){
	var objecttable=document.getElementById(config.tableid).tBodies[0];
	var ds =config.ds;
	var flaname=getFlashName(config.type);//根据类型获得相应的flash的名字
	flaname= (config.flaname)?config.flaname:flaname;
	var chartob = new FusionCharts(_Global.ContextPath+"/download/FusionCharts/"+flaname+".swf", (config.cid)?config.cid:"chartid", (config.width)?config.width:"50",(config.height)?config.height:"50", "0", "0");
	var colarray=config.linewar.lcolarray;
	var cara =new Array();
	//循环表格列和参数列数组 用于查找列相应的序号 
	for(var i =0;i<objecttable.rows[0].cells.length;i++){
		for(var j=0;j<colarray.length;j++){
			if(objecttable.rows[0].cells[i].getAttribute("column")==colarray[j]){
			    cara.push(i);
		    }
		}
	}
	if(config.type ==51)createlinear();
	if(config.type ==61)createhled();
	//拼写linear chart的图
	function createlinear(){
		//根据页面表格的记录行数循环
	    for(var i=0;i<objecttable.rows.length;i++){
	    	// 根据参数的列循环  用于多列显示图
	    	for(var j=0;j<colarray.length;j++){
	    		var chartob = new FusionCharts(_Global.ContextPath+"/download/FusionCharts/"+flaname+".swf", (config.cid)?config.cid:"chartid", (config.width)?config.width:"60",(config.height)?config.height:"20", "0", "0");
	            var val =((ds.getItem(i,colarray[j]))*100).toFixed(2);
	    	    var piestring =(config.chart)?config.chart:"<chart baseFontSize='8'  showTickMarks='0' numberSuffix='%' upperLimit='100' lowerLimit='0' pointerRadius='3' pointerOnTop='1' ";
	    	    piestring+=" pointerSides='3' valueAbovePointer='0' chartLeftMargin='13' chartTopMargin='9' chartBottomMargin='5' >"
		        piestring+="<colorRange><color minValue='0' maxValue='"+val+"'/>";
		        piestring+="<color minValue='"+val+"' maxValue='100' /></colorRange>";
		        //piestring+="<pointers><pointer  value='"+val+"' /></pointers>";
		        piestring+="<trendpoints>";
                piestring+="<point  value='"+val+"' showOnTop='0' valueAbovePointer='0' displayValue='"+val+"%'/>"
                piestring+="</trendpoints>"
		        //piestring+="<value>"+val+" /></value>";
		        piestring+="</chart>"
		        chartob.setDataXML(piestring);
	            chartob.render(objecttable.rows[i].cells[cara[j]]);
	    	}
	    }
	}
	//拼写 HLED chart 的图
	function createhled(){
		//根据页面表格的记录行数循环
	    for(var i=0;i<objecttable.rows.length;i++){
	    	// 根据参数的列循环  用于多列显示图
	    	for(var j=0;j<colarray.length;j++){
	    		var chartob = new FusionCharts(_Global.ContextPath+"/download/FusionCharts/"+flaname+".swf", (config.cid)?config.cid:"chartid", (config.width)?config.width:"60",(config.height)?config.height:"20", "0", "0");
	            var val =((ds.getItem(i,colarray[j]))*100).toFixed(2);
	    	    var piestring =(config.chart)?config.chart:"<chart baseFontSize='10'  numberSuffix='%' upperLimit='100' lowerLimit='0' >"
		        piestring+="<colorRange><color minValue='0' maxValue='"+val+"' code='ffffff'/>";
		        piestring+="<color minValue='"+val+"' maxValue='100' code='ffffff'/></colorRange>";
		       // piestring+="<pointers><pointer  value='"+val+"' /></pointers>";
		       // piestring+="<value >"+val+"</value>";
		        piestring+="<trendpoints>";
                piestring+="<point  value='50' showOnTop='0' valueAbovePointer='0' displayValue='75'/>"
                piestring+="</trendpoints>"
		        piestring+="</chart>"
		        chartob.setDataXML(piestring);
	            chartob.render(objecttable.rows[i].cells[cara[j]]);
	    	}
	    }
	}
	/**
     * 根据类型返回flash名称 
     * */
    function getFlashName(type){
        if(type == 51){return "HLinearGauge"}
        if(type == 61){return "HLED"}
    }
}
