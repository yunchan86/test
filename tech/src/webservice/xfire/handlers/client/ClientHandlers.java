package webservice.xfire.handlers.client;

import java.net.MalformedURLException;

import org.codehaus.xfire.client.Client;
import org.codehaus.xfire.client.XFireProxyFactory;
import org.codehaus.xfire.service.Service;
import org.codehaus.xfire.service.binding.ObjectServiceFactory;

import webservice.xfire.handlers.IHelloWorldService;


public class ClientHandlers {

	private static final String url = "http://localhost/testWeb/services/HelloWorldHandler" ;
	private static final String namespace = "webservice.xfire.handlers" ;
	public static void main(String[] args) {
		Service serviceModel = new ObjectServiceFactory().create(IHelloWorldService.class,null,namespace,null) ;
		try {
			IHelloWorldService clientService = (IHelloWorldService)new XFireProxyFactory().create(serviceModel,url) ;
			Client client = Client.getInstance(clientService) ;
			client.addInHandler(new ClientHeaderInHandler()) ;
			client.addOutHandler(new ClientHeaderOutHandler()) ;
			System.out.println(clientService.getStr("≤‚ ‘≥…π¶"));
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ;
		}
	}
}
