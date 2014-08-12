package webservice.cxf.interceptor;

import webservice.cxf.HelloWorld;

public class Server {
	protected Server() throws Exception {
		HelloWorld helloworldImpl = new HelloWorld() ;
	}
	
	public static void main(String args[]) throws Exception {
		new Server() ;
		System.out.println("Server ready...");
		Thread.sleep(60*1000) ;
		System.out.println("Server exiting");
		System.exit(0) ;
	}
}
