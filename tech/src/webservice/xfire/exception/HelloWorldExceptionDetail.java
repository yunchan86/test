package webservice.xfire.exception;

import java.io.Serializable;

public class HelloWorldExceptionDetail implements Serializable {
	private static final long serialVersionUID = 6337506164121768873L;
	private String message ;
	public HelloWorldExceptionDetail() {}
	public HelloWorldExceptionDetail(String message) {
		this.message = message ;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}
