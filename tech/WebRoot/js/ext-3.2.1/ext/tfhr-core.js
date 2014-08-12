Ext.ns('Tfhr','Tfhr-core');
Ext.ns('Tfhr.data');  // equivalent and preferable to above syntax
Tfhr.xmlutil = function(data){
    if(window.ActiveXObject){
        var doc=new ActiveXObject("MSXML2.DOMDocument.3.0");
        doc.async="false";
        doc.loadXML(data);
    }
    else{
      var parser=new DOMParser();
      var doc=parser.parseFromString(data,"text/xml");
    }
    var xmlob= doc.documentElement;
    return xmlob;
}

/**
 *config
 *data           xml object
 *@record        grid cm
 *@pageSize      default  20
*/
Tfhr.Grid = function(config){
    var store = config.store,grid;
    var col = config.record,fields=[],record=[];
    var sm=new Ext.grid.CheckboxSelectionModel();
    var limit = config.pageSize===null?'': config.pageSize||20;
    function createCM(){
          var cr = config.record;
          for(var k=0;k<cr.length;k++){
                fields[k]={name:cr[k].dataIndex,type:cr[k].type};
                if('date'==cr[k].type){
                      if(cr[k].dateFormat){fields[k].dateFormat=cr[k].dateFormat;}
                      else {fields[k].dateFormat='Y-m-d\\TH:i:s';}
                }
                if(cr[k].sortable!==false) cr[k].sortable = true;
                if(cr[k].editor!==false) cr[k].editor = true;
                if(!Tfhr.data.coldata)Tfhr.data.coldata=new Array();
                Tfhr.data.coldata[k]=new Array();
                Tfhr.data.coldata[k][1]=cr[k].dataIndex;
                Tfhr.data.coldata[k][0]=cr[k].header;
          }
    }
    function createGrid(){
        var GRID=(config.noedit===true)?Ext.grid.GridPanel:Ext.grid.EditorGridPanel;
        var cm = new Ext.grid.ColumnModel(col);
         if(!store){
             store = new Ext.data.Store({
                 proxy: new Ext.ux.data.PagingMemoryProxy(config.data),
                 reader: new Ext.data.XmlReader({record: 'row',fields:fields})
             });
             var storeone = new Ext.data.Store({
                 proxy: new Ext.ux.data.PagingMemoryProxy(config.data),
                 reader: new Ext.data.XmlReader({record: 'row',fields:fields})
             });
             Tfhr.data.store = storeone;
             storeone.load();
         }
         if(config.data)store.load({params:{start:0,limit:limit}});
         var bbar=new Ext.PagingToolbar({store: store,pageSize:limit,displayInfo:true,loadMask:true,maskDisabled:false});
         
         var gridob = {sm:sm,cm:cm,ds:store,bbar:bbar,autoHeight:true};
         if(config.sum){
             gridob.plugins=[new Ext.ux.grid.GridSummary()];
         }
         if(config.toexc){
             var tbar  = new Ext.Button({text:'导出',handler:Tfhr.toexcel});
             gridob.tbar=[tbar];
         }
         grid = new GRID(gridob);
    }

    createCM();
    createGrid();
    this.grid = grid;
    this.store = store;
    this.sm = sm;
    this.cm = grid.getColumnModel();
}
Tfhr.toexcel = function(){
    var oXL = new ActiveXObject("Excel.Application");
    var oWB = oXL.Workbooks.Add();
    var oSheet = oWB.ActiveSheet;
    var data = Tfhr.data.store;
    //增加表头
    for(var c=0;c<Tfhr.data.coldata.length;c++){
        oSheet.Cells(1,c+1).value = Tfhr.data.coldata[c][0];
    }
    //row
    var rownum=0;
    for(var i=0;i<data.totalLength;i++){
        //逐行增加列
        for(var j=0;j<Tfhr.data.coldata.length;j++){
            oSheet.Cells(i + 2, j + 1).value = data.data.items[i].data[Tfhr.data.coldata[j][1]];
        }
    }
    oXL.Visible = true;
}
/**Tfhr.Btns = function(config){}

Tfhr.Panel = function(config){}

Tfhr.Tree = function(config){}

Tfhr.Viewport = function(config){
    var eastpanel,westpanel,northpanel,southpanel,centerpanel,tfhrviewport;
    
    eastpanel = new Ext.Panel({
        region:'east',title:'eastpanel',
        items:{}
    });
    westpanel = new Ext.Panel({
        region:'west',title:'westpanel',
        items:{}
    });
    northpanel = new Ext.Panel({
        region:'north',title:'northpanel',
        items:{}
    });
    southpanel = new Ext.Panel({
        region: 'south',title:'southpanel',
        items:{}
    });
    centerpanel = new Ext.Panel(
        region: 'center',title:'centerpanel',
        items:{}
    });
    tfhrviewport = new Ext.Viewport({
        layout:'border',
        items:[eastpanel,westpanel,northpanel,southpanel,southpanel]
    })
    
    getTfhrPanel : function(o){}
}



Tfhr.Ajax = function(config){}*/