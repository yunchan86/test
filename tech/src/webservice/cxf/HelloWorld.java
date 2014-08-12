package webservice.cxf;

import javax.jws.WebParam;
import javax.jws.WebService;
/**
 * WebService服务端的实现类
 * @date Feb 24, 2011
 * @author CHY
 * @version 1.0
 */
@WebService
public class HelloWorld {
	public String sayHi(@WebParam(name="text")String text) {
		System.out.println("Hello Server...");
		return "Hello "+text ;
	}
}
