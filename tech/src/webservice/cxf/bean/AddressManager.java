package webservice.cxf.bean;

import java.util.ArrayList;
import java.util.List;

import javax.jws.WebService;

@WebService
public class AddressManager {
	private int requestCount = 0 ;
	public List<Address> getAddressList() {
		requestCount++ ;
		System.out.println("requestCount="+requestCount);
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
		requestCount++ ;
		System.out.println("requestCount="+requestCount);
		return list ;
	}
}
