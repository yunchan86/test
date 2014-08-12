function ListView() {
	this.showListView = function() {
		Ext.onReady(function(){
			var data = {
				"images":[
					      {
					         "name":"dance_fever.jpg",
					         "size":2067,
					         "lastmod":1236974993000,
					         "url":"images\/thumbs\/dance_fever.jpg"
					      },
					      {
					         "name":"zack_sink.jpg",
					         "size":2303,
					         "lastmod":1236974993000,
					         "url":"images\/thumbs\/zack_sink.jpg"
					      }
					   ]
			} ;
			 var store = new Ext.data.JsonStore({ 
		         //url: 'get-images.php', 
		         data :data ,
		         root: 'images', 
		         fields: ['name', 'url', {name:'size', type: 'float'}, {name:'lastmod', type:'date', dateFormat:'timestamp'}] 
		     }); 
		     //store.load(); 
		  
		     var listView = new Ext.ListView({ 
		         store: store, 
		         multiSelect: true, 
		         emptyText: 'No images to display', 
		         reserveScrollOffset: true, 
		  
		         columns: [{ 
		             header: 'File', 
		             width: .5, 
		             tpl:'<img src="{url}" title ={name}/>',
		             dataIndex: 'name' 
		         },{ 
		             header: 'Last Modified', 
		             xtype: 'datecolumn', 
		             format: 'm-d h:i a', 
		             width: .35,  
		             dataIndex: 'lastmod' 
		         },{ 
		             header: 'Size', 
		             dataIndex: 'size', 
		             tpl: '{size:fileSize}', 
		             align: 'right', 
		             cls: 'listview-filesize' 
		         }] 
		     }); 
		      
		     // put it in a Panel so it looks pretty 
		     var panel = new Ext.Panel({ 
		         id:'images-view', 
		         width:425, 
		         height:250, 
		         collapsible:true, 
		         layout:'fit', 
		         title:'Simple ListView <i>(0 items selected)</i>', 
		         items: listView 
		     }); 
		     panel.render(document.body); 
		  
		     // little bit of feedback 
		     listView.on('selectionchange', function(view, nodes){ 
		         var l = nodes.length; 
		         var s = l != 1 ? 's' : ''; 
		         panel.setTitle('Simple ListView <i>('+l+' item'+s+' selected)</i>'); 
		     }); 
			
		}) ;
	}
}