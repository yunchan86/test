package webservice.xfire.selfobj.server;

import java.util.HashMap;
import java.util.Map;

import webservice.xfire.selfobj.server.model.Address;

public class AddressManagerMap implements IAddressManagerMap {

	private int requestCount= 0 ;
	public Map<Integer, Address> getAddressMap() {
		requestCount++ ;
		System.out.println("requestCount = "+requestCount);
		Map<Integer,Address> returnMap = new HashMap<Integer,Address>() ;
		Address address = new Address() ;
		address.setIdentifier(1) ;
		address.setAddress("Haidian") ;
		address.setCity("Beijing") ;
		address.setCountry("China") ;
		address.setPoatalCode("100081") ;
		address.setProvince("Beijing") ;
		address.setExist(false) ;
		address.setArray(new String[]{"1","2","3"}) ;
		returnMap.put(address.getIdentifier(), address) ;
		
		address = new Address() ;
		address.setIdentifier(2) ;
		address.setAddress("Chaoyang") ;
		address.setCity("Beijing") ;
		address.setCountry("China") ;
		address.setPoatalCode("100081") ;
		address.setProvince("Beijing") ;
		address.setExist(true) ;
		address.setArray(new String[]{"A","B","C"}) ;
		returnMap.put(address.getIdentifier(), address) ;
		return returnMap ;
	}

	public Map<Integer, Address> setAddressMap(Map<Integer,Address> map) {
		requestCount++ ;
		System.out.println("requestCount = "+requestCount);
		return map;
	}

}
