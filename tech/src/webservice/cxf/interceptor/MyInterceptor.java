package webservice.cxf.interceptor;

import org.apache.cxf.interceptor.Fault;
import org.apache.cxf.message.Message;
import org.apache.cxf.phase.AbstractPhaseInterceptor;
import org.apache.cxf.phase.Phase;

public class MyInterceptor extends AbstractPhaseInterceptor<Message> {

	public MyInterceptor(String phase) {
		super(phase);
	}
	public MyInterceptor() {
		super(Phase.RECEIVE) ;
	}

	public void handleMessage(Message arg0) throws Fault {
		System.out.println("Hello,This is my Interceptor.");
	}

}
