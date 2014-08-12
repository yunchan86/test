package webservice.xfire.simple;

import java.net.MalformedURLException;

import org.codehaus.xfire.XFireFactory;
import org.codehaus.xfire.client.XFireProxyFactory;
import org.codehaus.xfire.service.Service;
import org.codehaus.xfire.service.binding.ObjectServiceFactory;

public class Client {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		String url = "http://localhost/testWeb/xservices/HelloWorldSimple" ;
		Service serviceModel = new ObjectServiceFactory().create(IHelloWorld.class) ;
		try {
			XFireProxyFactory factory = new XFireProxyFactory(XFireFactory.newInstance().getXFire()) ;
//			IHelloWorld service = (IHelloWorld)new XFireProxyFactory().create(serviceModel,url) ;
			IHelloWorld service = (IHelloWorld)factory.create(serviceModel,url) ;
			String result = service.hello(System.getProperty("user.name")) ;
			System.out.println("result = "+result) ;
			Float returnValue = service.add(new Float(3.2), new Float(2.8)) ;
			System.out.println("returnValue = "+returnValue) ;
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ;
		}
	}

}
