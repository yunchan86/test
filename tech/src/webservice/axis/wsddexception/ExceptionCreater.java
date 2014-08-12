package webservice.axis.wsddexception;

public class ExceptionCreater {
	public void getException() throws ServerException {
		ServerException se = new ServerException() ;
		se.setErrMSG("Server Side Self Exception") ;
		throw se ;
	}
}
