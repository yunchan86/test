package webservice.xfire.handlers.client;

import org.codehaus.xfire.MessageContext;
import org.codehaus.xfire.handler.AbstractHandler;

public class ClientHeaderInHandler extends AbstractHandler {

	public void invoke(MessageContext arg0) throws Exception {
		System.out.println("客户端之后做的一件事");
		System.out.println(arg0.getProperty("myparam"));
		System.out.println("ClientHeaderInHandler Exit.");
	}

}
