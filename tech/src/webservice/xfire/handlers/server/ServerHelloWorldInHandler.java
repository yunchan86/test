package webservice.xfire.handlers.server;

import org.codehaus.xfire.MessageContext;
import org.codehaus.xfire.handler.AbstractHandler;

public class ServerHelloWorldInHandler extends AbstractHandler {

	public void invoke(MessageContext arg0) throws Exception {
		System.out.println("���÷����֮ǰ����һ����");
		arg0.setProperty("myparam", "ServerHelloWorldInHandler���ݵĲ���") ;
		System.out.println("ServerHelloWorldInHandler Exit.");

	}

}
