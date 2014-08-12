package webservice.axis.wsddexception;

import java.rmi.RemoteException;

public class ServerException extends RemoteException {
	private static final long serialVersionUID = -8703656417727568771L;
	private String errMSG = "" ;
	public ServerException() {
		System.out.println("Server Exception!") ;
	}
	public void printErrorDescription() {
		System.out.println(errMSG) ;
	}
	public String getErrMSG() {
		return errMSG;
	}
	public void setErrMSG(String errMSG) {
		this.errMSG = errMSG;
	}
}
