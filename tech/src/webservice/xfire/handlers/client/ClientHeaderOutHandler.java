package webservice.xfire.handlers.client;

import org.codehaus.xfire.MessageContext;
import org.codehaus.xfire.handler.AbstractHandler;

public class ClientHeaderOutHandler extends AbstractHandler {

	public void invoke(MessageContext arg0) throws Exception {
		System.out.println("�ͻ���֮ǰ����һ����");
		arg0.setProperty("myparam", "ClientHeaderOutHandler���ݵĲ���") ;
		System.out.println("ClientHeaderOutHandler Exit.");
	}

}
