<%@ page language="java" import="java.util.*" pageEncoding="GB18030"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>Store's XmlReader of Ext</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<jsp:include page="/ref/head_ext.jsp" flush="true"/>

  </head>
  
  <body>111
  	<div id="button" style="text-align:center;width:100%;"></div>
  	<script type="text/javascript" src="Ajax.js"></script>
    <script language="javascript">
    	var xr = new Ajax() ;
    	xr.onClick() ;
    </script>
  </body>
</html>
