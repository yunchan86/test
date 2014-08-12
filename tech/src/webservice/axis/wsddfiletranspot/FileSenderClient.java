package webservice.axis.wsddfiletranspot;

import java.rmi.RemoteException;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.xml.namespace.QName;
import javax.xml.rpc.ParameterMode;
import javax.xml.rpc.ServiceException;

import org.apache.axis.client.Call;
import org.apache.axis.client.Service;
import org.apache.axis.encoding.XMLType;

import webservice.axis.wsddselfobj.clientmodel.Address;

public class FileSenderClient {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		try{
			String fileName = "readme.txt" ;
			DataHandler dh = new DataHandler(new FileDataSource(FileSenderClient.class.getResource(fileName).getPath())) ;
			String url = "http://localhost:8000/axis/services/FileReceiverServer" ;
			Service serv = new Service() ;
			Call call = (Call)serv.createCall() ;
			call.setTargetEndpointAddress(url) ;
			call.setOperationName(new QName(url,"receive")) ;
			QName qn = new QName("DataHandler","myNs:DataHandler") ;
			call.registerTypeMapping(Address.class, qn, 
					org.apache.axis.encoding.ser.JAFDataHandlerSerializerFactory.class, 
					org.apache.axis.encoding.ser.JAFDataHandlerDeserializerFactory.class);
			call.addParameter("s1", qn, ParameterMode.IN) ;
			call.addParameter("s2", XMLType.XSD_STRING, ParameterMode.IN) ;
			call.setReturnClass(String.class) ;
			String returnStr = (String)call.invoke(new Object[]{dh,"server.txt"}) ;
			System.out.println("Server Response: "+returnStr) ;
		}
		catch(ServiceException e) {
			e.printStackTrace() ;
		}
		catch(RemoteException e) {
			e.printStackTrace() ;
		}
	}

}
