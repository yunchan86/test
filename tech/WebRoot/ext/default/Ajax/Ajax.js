function Ajax() {
	this.ajaxTest = function() {
		Ext.Ajax.request({
			url : "Ajax.jsp",
			success : function(){alert("Ajax�ɹ�");},
			failure : function() {alert("Ajaxʧ��");},
			params : {}
		}) ;
	}
	this.onClick = function() {
		Ext.onReady(function(){
			var button = new Ext.Button({
				text:'��ʼ ',
				enableToggle:true,
				autoWidth:true,
				handler:xr.ajaxTest
			}) ;
			button.render("button") ;
		}) ;
	}
}