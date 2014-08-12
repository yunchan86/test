package webservice.cxf.bean;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.cxf.jaxws.JaxWsProxyFactoryBean;

public class Client {
	public static void getServerList() {
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean() ;
		factory.setServiceClass(IClientAddressManager.class) ;
		factory.setAddress("http://localhost/testWeb/cservices/address") ;
		IClientAddressManager client = (IClientAddressManager)factory.create() ;
		List<AddressClient> list = client.getAddressList() ;
		System.out.println("List size: "+list.size());
		for(Iterator<AddressClient> iter = list.iterator();iter.hasNext();) {
			AddressClient address = iter.next() ;
			System.out.println(address) ;
		}
	}
	public static void serServerList() {
		List<AddressClient> list = new ArrayList<AddressClient>() ;
		AddressClient address = new AddressClient() ;
		address.setIdentifier(1) ;
		address.setAddress("Haidian") ;
		address.setCity("Beijing") ;
		address.setCountry("China") ;
		address.setPoatalCode("100081") ;
		address.setProvince("Beijing") ;
		address.setExist(false) ;
		address.setArray(new String[]{"1","2","3"}) ;
		list.add(address) ;
		
		address = new AddressClient() ;
		address.setIdentifier(2) ;
		address.setAddress("Chaoyang") ;
		address.setCity("Beijing") ;
		address.setCountry("China") ;
		address.setPoatalCode("100081") ;
		address.setProvince("Beijing") ;
		address.setExist(true) ;
		address.setArray(new String[]{"A","B","C"}) ;
		list.add(address) ;
		JaxWsProxyFactoryBean factory = new JaxWsProxyFactoryBean() ;
		factory.setServiceClass(IClientAddressManager.class) ;
		factory.setAddress("http://localhost/testWeb/cservices/address") ;
		IClientAddressManager client = (IClientAddressManager)factory.create() ;
		List<AddressClient> returnList = client.setAddressList(list) ;
		System.out.println("List size: "+returnList.size()) ;
		for(Iterator<AddressClient> iter = returnList.iterator() ;iter.hasNext() ;) {
			address = iter.next() ;
			System.out.println(address) ;
		}
	}
	public static void main(String args[]) {
		getServerList() ;
		serServerList() ;
	}
}
