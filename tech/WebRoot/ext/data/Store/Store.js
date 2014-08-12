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
		            {id:'id',header: '���', width: 80, sortable: true, dataIndex: 'id'},
		            {header: '��������', width: 100, sortable: true, dataIndex: 'name'},
		            {header: 'ȱʧ��', width: 80, sortable: true, dataIndex: 'descn'}
		        ],
		        //stripeRows: true,
		        autoExpandColumn: 'id',
		        height: 100,
		        width: 800,
		        title: 'Ext��ȡXmlReader���ݵĲ���',
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
			����totalProperty:2,
			����successProperty:true,
			����root:[
					����{id:'id1',name:'name1',descn:'descn1',person:{
					����id:1,name:'man',sex:'male'
					����}},
					����{id:'id2',name:'name2',descn:'descn2',person:{
					����id:2,name:'woman',sex:'female'
					����}}
					��]
			} ;
		var reader = new Ext.data.JsonReader ({
			   successProperty: "successproperty",
			����total: "totalProperty",
			����root: "root",
			����id: "id"
			����}, [
			����'id','name','descn',
			����{name:'person_name',mapping:'person.name'},
			����{name:'person_sex',mapping:'person.sex'}
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
		            {id:'id',header: '���', width: 80, sortable: true, dataIndex: 'id'},
		            {header: '����', width: 100, sortable: true, dataIndex: 'name'},
		            {header: '����', width: 80, sortable: true, dataIndex: 'descn'},
		            {header: '����', width: 80, sortable: true, dataIndex: 'person_name'},
		            {header: '�Ա�', width: 80, sortable: true, dataIndex: 'person_sex'}
		        ],
		        //stripeRows: true,
		        autoExpandColumn: 'id',
		        height: 100,
		        width: 800,
		        title: 'Ext��ȡJsonReader�Ĳ���',
		        stateful: true,
		        stateId: 'jsongrid'
			}) ;
		jsongrid.render("jsonshowtable") ;
		}) ;
	}
	
	this.arrayReader = function() {
		Ext.onReady(function(){
			var data = [
			����['id1','name1','descn1'],
			����['id2','name2','descn2']
			��];
			var reader = new Ext.data.ArrayReader({
			����id:1
			����},[
			����{name:'name',mapping:1},
			����{name:'descn',mapping:2},
			����{name:'id',mapping:0},
		����]);
		var ds = new Ext.data.Store({
			reader:reader
		}) ;
		ds.loadData(data) ;
		var grid = new Ext.grid.GridPanel({
			store: ds,
		        columns: [
		            {id:'id',header: '���', width: 80, sortable: true, dataIndex: 'id'},
		            {header: '����', width: 100, sortable: true, dataIndex: 'name'},
		            {header: '����', width: 80, sortable: true, dataIndex: 'descn'}
		        ],
		        //stripeRows: true,
		        autoExpandColumn: 'id',
		        height: 100,
		        width: 800,
		        title: 'Ext��ȡArrayReader�Ĳ���',
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
		        ['1','���������','120','8','�鿴'],
		        ['2','���򹩵��','150','9','�鿴'],
		        ['3','��ţ�����','160','10','�鿴'],
		        ['4','�����߹����','184','11','�鿴'],
		        ['5','�¶������','180','11','�鿴'],
		        ['6','��׽������','189','12','�鿴'],
		        ['7','���ù����','143','9','�鿴'],
		        ['8','��Ȫ�����','136','8','�鿴'],
		        ['9','˫�������','173','10','�鿴'],
		        ['10','�½������','116','8','�鿴'],
		        ['11','���¹����','123','8','�鿴']
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
		            {id:'seq',header: '���', width: 80, sortable: true, dataIndex: 'seq'},
		            {header: '��������', width: 100, sortable: true, dataIndex: 'number'},
		            {header: 'ȱʧ��', width: 80, sortable: true, dataIndex: 'name'},
		            {header: 'ȱʧ��(%)', width: 200, sortable: true, dataIndex: 'address'},
		            {header: '����', width: 200, sortable: true, dataIndex: 'operator',renderer:linker}
		        ],
		        stripeRows: true,
		        autoExpandColumn: 'seq',
		        height: 200,
		        width: 800,
		        title: 'Ext��ȡArrayStore�Ĳ���',
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
			����totalProperty:2,
			����successProperty:true,
			����root:[
					����{id:'id1',name:'name1',descn:'descn1',person:{
					����id:1,name:'man',sex:'male'
					����}},
					����{id:'id2',name:'name2',descn:'descn2',person:{
					����id:2,name:'woman',sex:'female'
					����}}
					��]
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
		            {id:'id',header: '���', width: 80, sortable: true, dataIndex: 'id'},
		            {header: '����', width: 100, sortable: true, dataIndex: 'name'},
		            {header: '����', width: 80, sortable: true, dataIndex: 'descn'},
		            {header: '����', width: 80, sortable: true, dataIndex: 'person_name'},
		            {header: '�Ա�', width: 80, sortable: true, dataIndex: 'person_sex'}
		        ],
		        //stripeRows: true,
		        autoExpandColumn: 'id',
		        height: 100,
		        width: 800,
		        title: 'Ext��ȡJsonStore�Ĳ���',
		        stateful: true,
		        stateId: 'jsongrid'
			}) ;
		jsongrid.render("jsonstoreshowtable") ;
		}) ;
	}
}