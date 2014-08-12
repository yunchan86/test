package webservice.xfire.simple;

import java.rmi.Remote;

public interface IHelloWorld extends Remote {
	public String hello(String name) ;
	public Float add(Float a,float b) ;
}
