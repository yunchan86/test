package webservice.axis.helloworld;

import java.rmi.RemoteException;

import javax.xml.namespace.QName;
import javax.xml.rpc.ServiceException;

import org.apache.axis.client.Call;
import org.apache.axis.client.Service;

public class ClientJWS {

	/**
	 * @param args
	 * @throws ServiceException 
	 * @throws RemoteException 
	 */
	public static void main(String[] args) throws ServiceException, RemoteException {
		String url = "http://127.0.0.1/testWeb/webservice/axis/helloworld/HelloWorldJWS.jws" ;
		Service ser = new Service() ;
		Call call = (Call)ser.createCall() ;
		call.setTargetEndpointAddress(url) ;
		call.setOperationName(new QName(url,"test")) ;
		String result = (String) call.invoke(new Object[]{"Quahilong",10}) ;
		System.out.println("result="+result) ;
	}

}
