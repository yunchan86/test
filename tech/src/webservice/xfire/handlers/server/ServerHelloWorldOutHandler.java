package webservice.xfire.handlers.server;

import org.codehaus.xfire.MessageContext;
import org.codehaus.xfire.handler.AbstractHandler;

public class ServerHelloWorldOutHandler extends AbstractHandler {

	public void invoke(MessageContext arg0) throws Exception {
		System.out.println("���÷����֮������һ����");
		System.out.println(arg0.getProperty("myparam"));
		System.out.println("ServerHelloWorldOutHandler Exit.");
	}

}
