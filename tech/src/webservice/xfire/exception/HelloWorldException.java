package webservice.xfire.exception;

import org.codehaus.xfire.fault.FaultInfoException;

public class HelloWorldException extends FaultInfoException {
	private static final long serialVersionUID = -3336129891725682947L;
	private HelloWorldExceptionDetail hwd ;
	public HelloWorldException(String message,HelloWorldExceptionDetail hwd) {
		super(message) ;
		this.hwd = hwd ;
	}
	public HelloWorldExceptionDetail getFaultInfo() {
		return hwd ;
	}
}
