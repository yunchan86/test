TfhrFusionChart={}

/**
 *ͼƬ�ĵ��÷���
 * example
 *var mconfig = [["SY","����"],["SSY","������"],["QN","ȥ��"],["JN","����"],["MN","����"]];
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
 *          examples        [["SY","����"],["SSY","������"],["QN","ȥ��"]]
 * @config.stacked.sname      default mname
 * @config.stacked.sconfig    //default all
 *          examples        [[["SY","����"],["SSY","������"]],[["QN","ȥ��"],["XYN","��һ��"]]]
 * @config.colorconfig  ["#000000","#FFFFFF"]
 * */
TfhrFusionChart.xmlchartob =function(config){
	if(!config.type){ alert('����������');return}
	var flaname=getFlashName(config.type);//�������ͻ����Ӧ��flash������
	flaname= (config.flaname)?config.flaname:flaname;
	if(config.figure){flaname=flaname.replace(/3/,2)}
	var chartob = new FusionCharts(_Global.ContextPath+"/download/FusionCharts/"+flaname+".swf", (config.cid)?config.cid:"chartid", (config.width)?config.width:"350",(config.height)?config.height:"230", "0", "0");
	
	//����xml �ļ����ݵķ��� 
	if(config.local){
		chartob.setDataURL(config.dataurl);
		chartob.render(config.divid);
		return
	}
    if(!config.ds){return}
    if(!config.divid){return}
    var ds =config.ds;
    var chart ="<chart ";
    var chartDefaultConfig=[["ChartNoDataText","û��������ʾ"],["baseFontSize","15"]];
    var chartconfig=new Array;;
    var colorArray=(config.colorconfig)?config.colorconfig:[];
    //������ô���
    if(config.chartconfig){chartconfig =(config.chartconfig)?config.chartconfig:chartconfig;}
    //����Ĭ�������ļ�ѭ��,�������ļ��и���������
    for(var i=0;i<chartDefaultConfig.length;i++){
    	chartconfig.push(chartDefaultConfig[i]);
    }
    //���������ļ�ѭ��,��chart������
    for(var i=0;i<chartconfig.length;i++){
    	chart+=chartconfig[i][0]+'="';
    	chart+=chartconfig[i][1]+'" ';
    }
    chart+=" >";
    var jsfn;//javascript����ƴ���ı���
    //������ô���chart,��������chart�ַ���Ϊ׼,�����滻֮ǰ��chart����
    var piestring =(config.chart)?config.chart:chart;
    //��������
    if(config.fn){var fn =(config.fn)?config.fn:"chartcallback";}
    
    var flaname=getFlashName(config.type);//�������ͻ����Ӧ��flash������
    if(config.type<10){createSingle();}//���õ��㷽��
    if(config.type>10&&config.type<50){createMulti();}//����˫�㷽��
    if(config.type>50){createStacked();}//����Ƕ��˫�㷽��
    piestring +='</chart>'
    chartob.setDataXML(piestring);
	chartob.render(config.divid);
	  /**
	   * һ�����ݵĵķ���  <set label="" value="" >
	  * */
    function createSingle(){
        config.single=(config.single)?config.single:{}
        var sid = (config.single.sid)?config.single.sid:"SID";//id
        var sname =(config.single.sname)?config.single.sname:"SNAME";//name
        var svalue =(config.single.svalue)?config.single.svalue:"SVALUE";//value
        //��������ѭ�� ƴд�ַ���
        for(var i=0;i<ds.getRowCount();i++){
            var nodeList=ds.getRowByIndex(i);//��õ�ǰ��
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
     * �������ݵķ���
     * 
     * <categories>
     *    <category label="" /> 
     *  </categories>
     * <dataset seriesName="">
     *     <set value="" /> 
     *  </dataset>
     * */
    function createMulti(){//������ѭ��alert(nodeList.getItemCount())
        if(!config.multi){return}
        if(!config.multi.mconfig){return}
        var mname =(config.multi.mname)?config.multi.mname:'mname';
        
        var dataconfig=config.multi.mconfig;
        //����������ѭ��  
        for(var i=0;i<dataconfig.length+1;i++){//ds.getColumnCount()
       	    //���ӽڵ� ���Ϊ��һ��������<categories> ��������<dataset>
       	    if(i==0){
                piestring +="<categories>";
            }else{
            	//�������40��ȷ������Ϊ��
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
            //������ѭ��
            for(var j =0;j<ds.getRowCount();j++){
                if(i==0){//���Ϊ��һ����Ϊcategory 
                    if(mname.indexOf(",")<0){
                    	piestring +="<category label='"+ds.getItem(j,mname)+"'/>";
                    }else{
                    	var mnameArray=mname.split(",");
                    	piestring +="<category label='"+ds.getItem(j,mnameArray[0])+"/"+ds.getItem(j,mnameArray[1])+"'/>";
                    }
                    
                }else{
                //���ÿ�����Ӧ�е�ֵ
                    piestring +="<set value='"+ds.getItem(j,dataconfig[i-1][0])+"' ";//����е���
                    jsfn = fn+"('"+j+"','"+dataconfig[i-1][0]+"')";
                    if(config.fn)piestring += ' link="JavaScript:'+jsfn+';" ';
                    piestring += '  />';
                }
            }
            if(i==0){//����</>  ���Ϊ��һ����ƴдcategory 
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
        //��������dataset����ѭ��
        for(var x=0;x<sconfigArray.length;x++){
        	piestring += '<dataset>';
        	var stackConfig =sconfigArray[x];
        	//���ݸ����е�dataSet����ѭ��
        	for(var y=0;y<stackConfig.length;y++){
        		piestring += '<dataSet seriesName="'+stackConfig[y][1]+'">';
        		//����ds������ѭ��
        		for(var z=0;z<ds.getRowCount();z++){
        			piestring += '<set value="'+ds.getItem(z,sconfigArray[x][y][0])+'"/>';
        		}
        		piestring += '</dataSet>';
        	}
        	piestring += '</dataset>';
        }
    }
    /**
     * �������ͷ���flash���� 
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
 * С�����ĵ��÷���  ���Ǳ�
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
	if(!config.type){ alert('����������');return}
	if(!config.angular){return};
	var ds =config.ds;
	var flaname=getFlashName(config.type);//�������ͻ����Ӧ��flash������
	flaname= (config.flaname)?config.flaname:flaname;
	var chartob = new FusionCharts(_Global.ContextPath+"/download/FusionCharts/"+flaname+".swf", (config.cid)?config.cid:"chartid", (config.width)?config.width:"350",(config.height)?config.height:"230", "0", "0");
	
	var piestring ;
	if(config.type<10){createwidget();}//���� �㷽��
    piestring +='</Chart>';
    chartob.setDataXML(piestring);
	chartob.render(config.divid);
    /**
     * �Ǳ�ķ���
     * */
     
    function createwidget(){
    	var range = config.angular.range;
    	//ƴдĬ��<chart>
        if(config.chart){
    	    piestring =config.chart;
        }else{
        	var e =ds.getItem(config.angular.dsnumber,range[range.length-1][0]);
    	    piestring = " <Chart gaugeStartAngle='240' gaugeEndAngle='-60' ";
        	piestring += "upperLimit='"+ds.getItem(config.angular.dsnumber,range[range.length-1][0])+"' >";
        }
        piestring+="<colorRange>";
        //ƴд colorRange(���ֶεķ�Χ) �Ĵ�
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
     * �������ͷ���flash���� 
     * */
    function getFlashName(type){
        if(type == 1){return "AngularGauge"}
    }
}

/**
 * ��tableÿ�м���ͼƬ
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
	var flaname=getFlashName(config.type);//�������ͻ����Ӧ��flash������
	flaname= (config.flaname)?config.flaname:flaname;
	var chartob = new FusionCharts(_Global.ContextPath+"/download/FusionCharts/"+flaname+".swf", (config.cid)?config.cid:"chartid", (config.width)?config.width:"50",(config.height)?config.height:"50", "0", "0");
	var colarray=config.linewar.lcolarray;
	var cara =new Array();
	//ѭ������кͲ��������� ���ڲ�������Ӧ����� 
	for(var i =0;i<objecttable.rows[0].cells.length;i++){
		for(var j=0;j<colarray.length;j++){
			if(objecttable.rows[0].cells[i].getAttribute("column")==colarray[j]){
			    cara.push(i);
		    }
		}
	}
	if(config.type ==51)createlinear();
	if(config.type ==61)createhled();
	//ƴдlinear chart��ͼ
	function createlinear(){
		//����ҳ����ļ�¼����ѭ��
	    for(var i=0;i<objecttable.rows.length;i++){
	    	// ���ݲ�������ѭ��  ���ڶ�����ʾͼ
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
	//ƴд HLED chart ��ͼ
	function createhled(){
		//����ҳ����ļ�¼����ѭ��
	    for(var i=0;i<objecttable.rows.length;i++){
	    	// ���ݲ�������ѭ��  ���ڶ�����ʾͼ
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
     * �������ͷ���flash���� 
     * */
    function getFlashName(type){
        if(type == 51){return "HLinearGauge"}
        if(type == 61){return "HLED"}
    }
}
