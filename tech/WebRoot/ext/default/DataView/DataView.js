function DataView() {
	this.showData = function() {
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
			var tpl = new Ext.XTemplate(
			    '<tpl for=".">',
			        '<div class="thumb-wrap" id="{name}">',
			        '<div class="thumb"><img src="{url}" title="{name}"></div>',
			        '<span class="x-editable">{shortName}</span></div>',
			    '</tpl>',
			    '<div class="x-clear"></div>'
			);
			var dataView = new Ext.DataView({
				store: store,
		        tpl: tpl,
		        autoHeight:true,
		        multiSelect: true,
		        overClass:'x-view-over',
		        itemSelector:'div.thumb-wrap',
		        emptyText: 'No images to display'
			}) ;
			var panel = new Ext.Panel({
				id:'images-view',
			    frame:true,
			    width:535,
			    autoHeight:true,
			    collapsible:true,
			    layout:'fit',
			    title:'Simple DataView',
			    items:dataView
			}) ;
			panel.render("dataView");
		}) ;
	}
}