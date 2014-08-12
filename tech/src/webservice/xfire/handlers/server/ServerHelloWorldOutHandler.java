package webservice.xfire.handlers.server;

import org.codehaus.xfire.MessageContext;
import org.codehaus.xfire.handler.AbstractHandler;

public class ServerHelloWorldOutHandler extends AbstractHandler {

	public void invoke(MessageContext arg0) throws Exception {
		System.out.println("调用服务端之后做的一件事");
		System.out.println(arg0.getProperty("myparam"));
		System.out.println("ServerHelloWorldOutHandler Exit.");
	}

}
