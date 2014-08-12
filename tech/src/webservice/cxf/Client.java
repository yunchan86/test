package webservice.cxf;

import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;

public final class Client {
	private Client() {}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean() ;
		factory.setServiceClass(IHelloWorld.class) ;
		factory.setAddress("http://localhost/testWeb/cservices/helloWorld") ;
		IHelloWorld client = (IHelloWorld)factory.create() ;
		System.out.println("Invoke sayHi()...");
		System.out.println(client.sayHi(System.getProperty("user.name")));
		System.exit(0) ;
	}

}
