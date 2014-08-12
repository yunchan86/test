package webservice.axis.wsddchain;

import org.apache.axis.SimpleChain;

import webservice.axis.wsddhandler.HelloWorldHandler;

public class HelloWorldChain extends SimpleChain {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1120600002440992532L;
	public HelloWorldChain() {
		HelloWorldHandler handler1 = new HelloWorldHandler() ;
		HelloWorldHandler2 handler2 = new HelloWorldHandler2() ;
		this.addHandler(handler1)  ;
		this.addHandler(handler2) ;
	}
}
