package webservice.xfire.filetransport.client;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.lang.reflect.Proxy;
import java.net.MalformedURLException;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;

import org.codehaus.xfire.client.XFireProxy;
import org.codehaus.xfire.client.XFireProxyFactory;
import org.codehaus.xfire.service.Service;
import org.codehaus.xfire.service.binding.ObjectServiceFactory;
import org.codehaus.xfire.soap.SoapConstants;

import webservice.xfire.filetransport.IFileTransport;

public class Client {

	private static final String url = "http://localhost:8000/Ext3/services/FileTransport" ;
	private static final String namespace = "webservice.xfire.filetransport" ;
	public static void getFileFromServer() {
		InputStreamReader input = null ;
		OutputStreamWriter fos = null ;
		BufferedReader br = null ;
		File file = null ;
		Service serviceModel = new ObjectServiceFactory().create(IFileTransport.class,null,namespace,null) ;
		try {
			IFileTransport service = (IFileTransport)new XFireProxyFactory().create(serviceModel,url) ;
			org.codehaus.xfire.client.Client client = ((XFireProxy)Proxy.getInvocationHandler(service)).getClient() ;
			client.setProperty(SoapConstants.MTOM_ENABLED, "true") ;
			DataHandler handler = service.getFile() ;
			file = new File("fromServer.txt")  ;
			if(handler==null) {
				System.out.println("failure");
			}
			input = new InputStreamReader(handler.getInputStream(),"UTF-8") ;
			fos = new OutputStreamWriter(new FileOutputStream(file),"UTF-8")  ;
			br = new BufferedReader(input) ;
			String tmpStr = null ;
			while((tmpStr=br.readLine())!=null) {
				fos.write(tmpStr) ;
				fos.write("\r\n") ;
			}
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ; 
		}
		catch(IOException e) {
			e.printStackTrace() ;
		}
		finally {
			if(input!=null) {
				try {
					input.close() ;
					br.close() ;
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if(fos!=null) {
				try {
					fos.close() ;
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		System.out.println("Success file saved on client.At: "+file.getAbsolutePath());
	}
	public static void sendFileToServer() {
		String fileName = "client.txt" ;
		Service serviceModel = new ObjectServiceFactory().create(IFileTransport.class,null,namespace,null) ;
		try{
			IFileTransport service = (IFileTransport)new XFireProxyFactory().create(serviceModel,url) ;
			org.codehaus.xfire.client.Client client = ((XFireProxy)Proxy.getInvocationHandler(service)).getClient() ;
			client.setProperty(SoapConstants.MTOM_ENABLED, "true")  ;
			DataHandler handler = new DataHandler(new FileDataSource(Client.class.getResource(fileName).getPath())) ;
			String returnString = service.uploadFile(handler) ;
			System.out.println(returnString);
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ;
		}
	}
	public static void main(String[] args) {
		getFileFromServer() ;
		sendFileToServer() ;
	}

}
