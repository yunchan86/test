package webservice.xfire.selfobj.client;

import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.codehaus.xfire.client.XFireProxyFactory;
import org.codehaus.xfire.service.Service;
import org.codehaus.xfire.service.binding.ObjectServiceFactory;

import webservice.xfire.selfobj.server.model.Address;

public class Client {

	private static String url = "http://localhost:8000/Ext3/services/AddressManager" ;
	public static void getServerList() {
		Service serviceModel = new ObjectServiceFactory().create(IClientAddressManager.class) ;
		try {
			IClientAddressManager service = (IClientAddressManager)new XFireProxyFactory().create(serviceModel,url) ;
			List<Address> list = (ArrayList<Address>)service.getAddressList() ;
			System.out.println("List size: "+list.size());
			for(Iterator<Address> iter = list.iterator();iter.hasNext();) {
				Address address = iter.next() ;
				System.out.println(address) ;
			}
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ;
		}
	}
	public static void setServerList() {
		Service serviceModel = new ObjectServiceFactory().create(IClientAddressManager.class) ;
		try {
			IClientAddressManager service = (IClientAddressManager)new XFireProxyFactory().create(serviceModel,url) ;
			List<Address> list = new ArrayList<Address>() ;
			Address address = new Address() ;
			address.setIdentifier(1) ;
			address.setAddress("Haidian") ;
			address.setCity("Beijing") ;
			address.setCountry("China") ;
			address.setPoatalCode("100081") ;
			address.setProvince("Beijing") ;
			address.setExist(false) ;
			address.setArray(new String[]{"1","2","3"}) ;
			list.add(address) ;
			
			address = new Address() ;
			address.setIdentifier(2) ;
			address.setAddress("Chaoyang") ;
			address.setCity("Beijing") ;
			address.setCountry("China") ;
			address.setPoatalCode("100081") ;
			address.setProvince("Beijing") ;
			address.setExist(true) ;
			address.setArray(new String[]{"A","B","C"}) ;
			list.add(address) ;
			List<Address> returnList = service.setAddressList(list) ;
			System.out.println("List size: "+returnList.size()) ;
			for(Iterator<Address> iter = list.iterator() ;iter.hasNext() ;) {
				address = iter.next() ;
				System.out.println(address) ;
			}
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ;
		}
	}
	public static void main(String[] args) {
		getServerList() ;
		setServerList() ;
		
	}

}
