package webservice.xfire.exception;

public class HelloWorldServiceImpl implements IHelloWorldService {

	public String getException(String message) throws HelloWorldException {
		if(message.equals("")) {
			throw new HelloWorldException("��������Ϊ��",new HelloWorldExceptionDetail("�쳣���Գɹ�")) ;
		}
		System.out.println(message) ;
		return "û���쳣" ;
	}

}
