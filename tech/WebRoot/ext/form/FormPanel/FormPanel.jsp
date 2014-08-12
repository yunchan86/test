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
  <style type="text/css"> 　　
	  <!-- 　　body {font: 10pt "Arial"} 　　
	  h1 {font: 15pt/17pt "Arial"; font-weight: bold; color: maroon} 　　
	  h2 {font: 13pt/15pt "Arial"; font-weight: bold; color: blue} 　　
	  p {font: 10pt/12pt "Arial"; color: black}
	  .bcenter{text-align: center; color: green;}
	  --> 　　
  </style> 
  
  <body>
  	<div id="se"></div>
  	<div id="formpanel"></div>
  	<div id="formpanel2"></div>
  	<script type="text/javascript" src="FormPanel.js"></script>
    <script language="javascript">
    	var xr = new FormPanel() ;
    	xr.showForm() ;
    	xr.onShow2() ;
    </script>
  </body>
</html>
