package webservice.axis.wsddchain;

import org.apache.axis.AxisFault;
import org.apache.axis.MessageContext;
import org.apache.axis.handlers.BasicHandler;

public class HelloWorldHandler2 extends BasicHandler {

	/**
	 * 
	 */
	private static final long serialVersionUID = 713995948181359005L;
	private static long COUNT = 0 ;
	private int requestCount = 0 ;

	public void invoke(MessageContext arg0) throws AxisFault {
		requestCount++ ;
		COUNT++ ;
		String status = (String)this.getOption("status") ;
		System.out.println("HelloWorldHandler2's status is: "+status+",COUNT="+COUNT+",HandlerRequestCount="+requestCount) ;
	}

}
