package webservice.axis.wsddhandler;

import org.apache.axis.AxisFault;
import org.apache.axis.MessageContext;
import org.apache.axis.handlers.BasicHandler;

public class HelloWorldHandler extends BasicHandler {

	/**
	 * 
	 */
	private static final long serialVersionUID = 713995948181359004L;
	private static long COUNT = 0 ;
	private int requestCount = 0 ;

	public void invoke(MessageContext arg0) throws AxisFault {
		requestCount++ ;
		COUNT++ ;
		String status = (String)this.getOption("status") ;
		System.out.println("HelloWorldHandler's status is: "+status+",COUNT="+COUNT+",HandlerRequestCount="+requestCount) ;
	}

}
