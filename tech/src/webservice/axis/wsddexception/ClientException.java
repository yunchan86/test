package webservice.axis.wsddexception;

import java.rmi.RemoteException;

public class ClientException extends RemoteException {
	private static final long serialVersionUID = -474295973957178679L;
	private String errMSG = "Client Side Self Exception!" ;
	public ClientException() {
		System.out.println("Client Exception!") ;
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
