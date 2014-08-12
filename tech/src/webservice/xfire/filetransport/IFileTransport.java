package webservice.xfire.filetransport;

import javax.activation.DataHandler;

public interface IFileTransport {
	public 	DataHandler getFile() ;
	public String uploadFile(DataHandler handler) ;
}
