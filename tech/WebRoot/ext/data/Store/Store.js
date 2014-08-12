function Store() {
	this.readxml = function() {
		Ext.onReady(function(){
		var xmlData = "<?xml version='1.0' encoding='utf-8'?>" +
					    "<dataset>"+
					        "<id>1</id>" +
					        "<totalRecords>2</totalRecords>" +
					        "<success>true</success><rows>" +
					        "<record>" +
					            "<id>1</id>" +
					            "<name>name1</name>" +
					            "<descn>descn1</descn>" +
					        "</record>"+
					        "<record>"+
					            "<id>2</id>"+
					            "<name>name2</name>"+
					            "<descn>descn2</descn>"+
					        "</record></rows>"+
					    "</dataset>";
		var xdoc ;
		if(typeof(DOMParser)=='undefined') {
			xdoc = new ActiveXObject("Microsoft.XMLDOM");
    		xdoc.async="false";
    		xdoc.loadXML(xmlData);
		}
		else{
    		var domParser = new DOMParser();
    		xdoc = domParser.parseFromString(xmlData, 'application/xml');
    		domParser = null;
		}
		var record = Ext.data.Record.create([
		{name:"id",mapping:"id"},
		{name:"name"},
		{name:"descn"}
		]) ;
		var proxy = new Ext.data.MemoryProxy(xdoc);
		var reader = new Ext.data.XmlReader({
		    totalRecords: 'totalRecords',
		    success: 'success',
		    record: 'record',
		    id: "id"
		}, ['id','name','descn']);
		var ds = new Ext.data.Store({
		    proxy: proxy,
		    reader: reader
		});
		ds.load() ;
		var grid = new Ext.grid.GridPanel({
			store: ds,
		        columns: [
		            {id:'id',header: '序号', width: 80, sortable: true, dataIndex: 'id'},
		            {header: '供电区域', width: 100, sortable: true, dataIndex: 'name'},
		            {header: '缺失数', width: 80, sortable: true, dataIndex: 'descn'}
		        ],
		        //stripeRows: true,
		        autoExpandColumn: 'id',
		        height: 100,
		        width: 800,
		        title: 'Ext读取XmlReader数据的操作',
		        stateful: true,
		        stateId: 'grid'
		}) ;
		grid.render("showtable") ;
	}) ;
	}
	
	this.jsonReader = function() {
		Ext.onReady(function(){
			var data = {
			   id:0,
			　　totalProperty:2,
			　　successProperty:true,
			　　root:[
					　　{id:'id1',name:'name1',descn:'descn1',person:{
					　　id:1,name:'man',sex:'male'
					　　}},
					　　{id:'id2',name:'name2',descn:'descn2',person:{
					　　id:2,name:'woman',sex:'female'
					　　}}
					　]
			} ;
		var reader = new Ext.data.JsonReader ({
			   successProperty: "successproperty",
			　　total: "totalProperty",
			　　root: "root",
			　　id: "id"
			　　}, [
			　　'id','name','descn',
			　　{name:'person_name',mapping:'person.name'},
			　　{name:'person_sex',mapping:'person.sex'}
			]) ;
		var proxy = new Ext.data.MemoryProxy(data);
		var ds = new Ext.data.Store({
			//proxy:proxy,
		    reader: reader
		});
		ds.loadData(data) ;
		//ds.load() ;
		var jsongrid = new Ext.grid.GridPanel({
			store: ds,
		        columns: [
		            {id:'id',header: '序号', width: 80, sortable: true, dataIndex: 'id'},
		            {header: '名称', width: 100, sortable: true, dataIndex: 'name'},
		            {header: '描述', width: 80, sortable: true, dataIndex: 'descn'},
		            {header: '姓名', width: 80, sortable: true, dataIndex: 'person_name'},
		            {header: '性别', width: 80, sortable: true, dataIndex: 'person_sex'}
		        ],
		        //stripeRows: true,
		        autoExpandColumn: 'id',
		        height: 100,
		        width: 800,
		        title: 'Ext读取JsonReader的操作',
		        stateful: true,
		        stateId: 'jsongrid'
			}) ;
		jsongrid.render("jsonshowtable") ;
		}) ;
	}
	
	this.arrayReader = function() {
		Ext.onReady(function(){
			var data = [
			　　['id1','name1','descn1'],
			　　['id2','name2','descn2']
			　];
			var reader = new Ext.data.ArrayReader({
			　　id:1
			　　},[
			　　{name:'name',mapping:1},
			　　{name:'descn',mapping:2},
			　　{name:'id',mapping:0},
		　　]);
		var ds = new Ext.data.Store({
			reader:reader
		}) ;
		ds.loadData(data) ;
		var grid = new Ext.grid.GridPanel({
			store: ds,
		        columns: [
		            {id:'id',header: '序号', width: 80, sortable: true, dataIndex: 'id'},
		            {header: '名称', width: 100, sortable: true, dataIndex: 'name'},
		            {header: '描述', width: 80, sortable: true, dataIndex: 'descn'}
		        ],
		        //stripeRows: true,
		        autoExpandColumn: 'id',
		        height: 100,
		        width: 800,
		        title: 'Ext读取ArrayReader的操作',
		        stateful: true,
		        stateId: 'jsongrid'
			}) ;
		grid.render("arrayshowtable") ;
		}) ;
	}
	
	this.arrayStore = function() {
		Ext.onReady(function(){
		    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
		    var myData = [
		        ['1','锦江供电局','120','8','查看'],
		        ['2','青羊供电局','150','9','查看'],
		        ['3','金牛供电局','160','10','查看'],
		        ['4','都江堰供电局','184','11','查看'],
		        ['5','新都供电局','180','11','查看'],
		        ['6','青白江供电局','189','12','查看'],
		        ['7','金堂供电局','143','9','查看'],
		        ['8','龙泉供电局','136','8','查看'],
		        ['9','双流供电局','173','10','查看'],
		        ['10','温江供电局','116','8','查看'],
		        ['11','高新供电局','123','8','查看']
		    ];
		    // create the data store
		    var store = new Ext.data.ArrayStore({
		        fields: [
		            {name: 'seq'},
		           {name: 'number'},
		           {name: 'name'},
		           {name: 'address'},
		           {name: 'operator'}
		        ]
		    });
		    function linker(val) {
		    	return '<a title="display:table;width:100%" href="javascript:proc.onClickShowInfo(\'1\' )"><font color="blue">'+val+'</font></a>';
		    }
		    store.loadData(myData);
		    var grid = new Ext.grid.GridPanel({
		        store: store,
		        columns: [
		            {id:'seq',header: '序号', width: 80, sortable: true, dataIndex: 'seq'},
		            {header: '供电区域', width: 100, sortable: true, dataIndex: 'number'},
		            {header: '缺失数', width: 80, sortable: true, dataIndex: 'name'},
		            {header: '缺失率(%)', width: 200, sortable: true, dataIndex: 'address'},
		            {header: '操作', width: 200, sortable: true, dataIndex: 'operator',renderer:linker}
		        ],
		        stripeRows: true,
		        autoExpandColumn: 'seq',
		        height: 200,
		        width: 800,
		        title: 'Ext读取ArrayStore的操作',
		        stateful: true,
		        stateId: 'grid'
		    });
		    grid.render('arraystoreshowtable');
		});
	}
	
	this.jsonStore = function() {
		Ext.onReady(function(){
			var data = {
			   id:0,
			　　totalProperty:2,
			　　successProperty:true,
			　　root:[
					　　{id:'id1',name:'name1',descn:'descn1',person:{
					　　id:1,name:'man',sex:'male'
					　　}},
					　　{id:'id2',name:'name2',descn:'descn2',person:{
					　　id:2,name:'woman',sex:'female'
					　　}}
					　]
			} ;
			var store = new Ext.data.JsonStore({
				data : data,
				root:'root',
				fields: [
		            {name: 'id'},
		           {name: 'name'},
		           {name: 'descn'},
		           {name: 'person_name',mapping:'person.name'},
		           {name: 'person_sex',mapping:'person.sex'}
		        ]
			}) ;
			//store.loadData(data) ;
			var jsongrid = new Ext.grid.GridPanel({
			store: store,
		        columns: [
		            {id:'id',header: '序号', width: 80, sortable: true, dataIndex: 'id'},
		            {header: '名称', width: 100, sortable: true, dataIndex: 'name'},
		            {header: '描述', width: 80, sortable: true, dataIndex: 'descn'},
		            {header: '姓名', width: 80, sortable: true, dataIndex: 'person_name'},
		            {header: '性别', width: 80, sortable: true, dataIndex: 'person_sex'}
		        ],
		        //stripeRows: true,
		        autoExpandColumn: 'id',
		        height: 100,
		        width: 800,
		        title: 'Ext读取JsonStore的操作',
		        stateful: true,
		        stateId: 'jsongrid'
			}) ;
		jsongrid.render("jsonstoreshowtable") ;
		}) ;
	}
}