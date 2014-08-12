package webservice.axis.wsdd;

import java.rmi.Remote;

public interface IHelloWorldWSDD extends Remote {
	public String hello(String name) ;
	public Float add(Float a,float b) ;
}
