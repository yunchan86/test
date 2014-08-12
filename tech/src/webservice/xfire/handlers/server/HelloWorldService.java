package webservice.xfire.handlers.server;

import webservice.xfire.handlers.IHelloWorldService;

public class HelloWorldService implements IHelloWorldService {

	public String getStr(String message) {
		System.out.println("Receive message: "+message);
		return message;
	}

}
