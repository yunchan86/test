package webservice.axis.wsddexception;

import java.rmi.RemoteException;

import javax.xml.namespace.QName;
import javax.xml.rpc.Call;
import javax.xml.rpc.Service;
import javax.xml.rpc.ServiceException;
import javax.xml.rpc.encoding.TypeMapping;
import javax.xml.rpc.encoding.TypeMappingRegistry;

import org.apache.axis.client.ServiceFactory;

public class ClientExceptionReceiver {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		String uri = "http://faults.samples" ;
		String serviceName = "exception_service" ;
		javax.xml.rpc.ServiceFactory servFactory ;
		try {
			servFactory = ServiceFactory.newInstance() ;
			QName eqname = new QName(uri,serviceName) ;
			Service serv = servFactory.createService(eqname) ;
			TypeMappingRegistry registry = serv.getTypeMappingRegistry();
	        TypeMapping map = registry.getDefaultTypeMapping();

			String url = "http://localhost:8000/axis/services/ExceptionCreater" ;
			//Service serv = new Service() ;
			Call call = (Call)serv.createCall() ;
			QName qn = new QName("urn:CustomerFault","ServerException") ;
			map.register(ClientException.class, qn, 
					new org.apache.axis.encoding.ser.BeanSerializerFactory(ClientException.class,qn),
					new org.apache.axis.encoding.ser.BeanDeserializerFactory(ClientException.class,qn)) ;
			call.setTargetEndpointAddress(url) ;
			Object[] param = null ;
			call.setOperationName(new QName(url,"getException")) ;
			System.out.println("Will Catch Exception") ;
			String result = (String)call.invoke(param) ;
			System.out.println("result = "+result) ;
		}
		catch(ServiceException e) {
			System.out.println("Catch ServiceException") ;
			e.printStackTrace() ;
		}
		catch(ClientException e) {
			System.out.println("Catch Exception") ;
			e.printErrorDescription() ;
			e.printStackTrace() ;
		}
		catch(RemoteException e) {
			System.out.println("Catch RemoteException") ;
			e.printStackTrace() ;
		}
	}
}
