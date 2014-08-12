package webservice.xfire.handlers.client;

import org.codehaus.xfire.MessageContext;
import org.codehaus.xfire.handler.AbstractHandler;

public class ClientHeaderOutHandler extends AbstractHandler {

	public void invoke(MessageContext arg0) throws Exception {
		System.out.println("客户端之前做的一件事");
		arg0.setProperty("myparam", "ClientHeaderOutHandler传递的参数") ;
		System.out.println("ClientHeaderOutHandler Exit.");
	}

}
