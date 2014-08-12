package webservice.cxf;

import javax.xml.ws.Endpoint;

/**
 * 简单的WebService服务端
 * @date Feb 24, 2011
 * @author CHY
 * @version 1.0
 */
public class ServerSimple {
	protected ServerSimple() throws Exception {
		System.out.println("Starting Server");
		HelloWorld helloworldImpl = new HelloWorld() ;
		String address = "http://localhost/testWeb/cservices/helloWorld" ;
		Endpoint.publish(address, helloworldImpl) ;
	}
	public static void main(String[] args) throws Exception {
		new ServerSimple() ;
		System.out.println("Server ready...");
		Thread.sleep(60*1000) ;
		System.out.println("Server exiting");
		System.exit(0) ;
	}
}
