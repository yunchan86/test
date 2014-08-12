package webservice.axis.wsddselfobj;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import webservice.axis.wsddselfobj.servermodel.Address;

public class AddressManager {
	public List<Address> getAddressList() {
		List<Address> returnList = new ArrayList<Address>() ;
		Address address = new Address() ;
		address.setIdentifier(1) ;
		address.setAddress("Haidian") ;
		address.setCity("Beijing") ;
		address.setCountry("China") ;
		address.setPoatalCode("100081") ;
		address.setProvince("Beijing") ;
		address.setExist(false) ;
		address.setArray(new String[]{"1","2","3"}) ;
		returnList.add(address) ;
		
		address = new Address() ;
		address.setIdentifier(2) ;
		address.setAddress("Chaoyang") ;
		address.setCity("Beijing") ;
		address.setCountry("China") ;
		address.setPoatalCode("100081") ;
		address.setProvince("Beijing") ;
		returnList.add(address) ;
		address.setExist(true) ;
		address.setArray(new String[]{"A","B","C"}) ;
		return returnList ;
	}
	public List<Address> setAddressList(List<Address> list) {
		return list ;
	}
	
	public Map<Integer,Address> getAddressMap() {
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
	public Map<Integer,Address> setAddressMap(Map<Integer,Address> map) {
		return map ;
	}
}
