package webservice.xfire.handlers.client;

import org.codehaus.xfire.MessageContext;
import org.codehaus.xfire.handler.AbstractHandler;

public class ClientHeaderInHandler extends AbstractHandler {

	public void invoke(MessageContext arg0) throws Exception {
		System.out.println("�ͻ���֮������һ����");
		System.out.println(arg0.getProperty("myparam"));
		System.out.println("ClientHeaderInHandler Exit.");
	}

}
