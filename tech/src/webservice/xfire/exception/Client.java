package webservice.xfire.exception;

import java.net.MalformedURLException;

import org.codehaus.xfire.client.XFireProxyFactory;
import org.codehaus.xfire.service.Service;
import org.codehaus.xfire.service.binding.ObjectServiceFactory;

public class Client {
	private static final String url = "http://localhost:8000/Ext3/services/HelloWorldException" ;
	private static final String namespace = "webservice.xfire.exception" ;
	public static void main(String[] args) {
		Service serviceModel = new ObjectServiceFactory().create(IHelloWorldService.class,null,namespace,null) ;
		try {
			IHelloWorldService client = (IHelloWorldService)new XFireProxyFactory().create(serviceModel,url) ;
			String success = client.getException("³É¹¦") ;
			System.out.println(success);
			client.getException("") ;
		}catch(MalformedURLException e) {
			e.printStackTrace() ;
		}catch(HelloWorldException e) {
			e.printStackTrace() ;
		}
	}
}
