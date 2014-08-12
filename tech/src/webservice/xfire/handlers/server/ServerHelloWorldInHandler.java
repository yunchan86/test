package webservice.xfire.handlers.server;

import org.codehaus.xfire.MessageContext;
import org.codehaus.xfire.handler.AbstractHandler;

public class ServerHelloWorldInHandler extends AbstractHandler {

	public void invoke(MessageContext arg0) throws Exception {
		System.out.println("调用服务端之前做的一件事");
		arg0.setProperty("myparam", "ServerHelloWorldInHandler传递的参数") ;
		System.out.println("ServerHelloWorldInHandler Exit.");

	}

}
