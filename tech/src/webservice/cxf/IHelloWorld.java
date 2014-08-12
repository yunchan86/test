package webservice.cxf;

import javax.jws.WebParam;
import javax.jws.WebService;
/**
 * 客户端的接口代码
 * @date Feb 25, 2011
 * @author CHY
 * @version 1.0
 */
@WebService
public interface IHelloWorld {
	public String sayHi(@WebParam(name="text")String text) ;
}
