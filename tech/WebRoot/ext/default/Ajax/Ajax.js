function Ajax() {
	this.ajaxTest = function() {
		Ext.Ajax.request({
			url : "Ajax.jsp",
			success : function(){alert("Ajax成功");},
			failure : function() {alert("Ajax失败");},
			params : {}
		}) ;
	}
	this.onClick = function() {
		Ext.onReady(function(){
			var button = new Ext.Button({
				text:'开始 ',
				enableToggle:true,
				autoWidth:true,
				handler:xr.ajaxTest
			}) ;
			button.render("button") ;
		}) ;
	}
}