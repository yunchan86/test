package webservice.cxf;

import javax.jws.WebParam;
import javax.jws.WebService;
/**
 * �ͻ��˵Ľӿڴ���
 * @date Feb 25, 2011
 * @author CHY
 * @version 1.0
 */
@WebService
public interface IHelloWorld {
	public String sayHi(@WebParam(name="text")String text) ;
}
