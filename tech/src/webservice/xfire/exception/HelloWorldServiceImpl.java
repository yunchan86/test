package webservice.xfire.exception;

public class HelloWorldServiceImpl implements IHelloWorldService {

	public String getException(String message) throws HelloWorldException {
		if(message.equals("")) {
			throw new HelloWorldException("参数不能为空",new HelloWorldExceptionDetail("异常测试成功")) ;
		}
		System.out.println(message) ;
		return "没有异常" ;
	}

}
