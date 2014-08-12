package webservice.xfire.filetransport.server;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;

import webservice.xfire.filetransport.IFileTransport;

public class FileTransportImpl implements IFileTransport {

	public DataHandler getFile() {
		System.out.println("getFile is called");
		String fileName = "server.txt" ;
		System.out.println(FileTransportImpl.class.getResource(fileName).getPath());
		DataHandler dh = new DataHandler(new FileDataSource(FileTransportImpl.class.getResource(fileName).getPath())) ;
		return dh;
	}

	public String uploadFile(DataHandler handler) {
		System.out.println("uploadFile is called");
		File file = new File("fromClient.txt") ;
		if(handler == null) return "failure" ;
		InputStreamReader input = null ;
		OutputStreamWriter fos = null ;
		BufferedReader br = null ;
		try {
			input = new InputStreamReader(handler.getInputStream(),"UTF-8") ;
			fos = new OutputStreamWriter(new FileOutputStream(file),"UTF-8") ;
			br = new BufferedReader(input) ;
			String tmpStr = null ;
			while((tmpStr=br.readLine())!=null) {
				fos.write(tmpStr) ;
				fos.write("\r\n") ;
			}
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
		return "Success file saved on server.At: "+file.getAbsolutePath();
	}

}
