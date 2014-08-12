package webservice.xfire.selfobj.client;

import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.codehaus.xfire.client.XFireProxyFactory;
import org.codehaus.xfire.service.Service;
import org.codehaus.xfire.service.binding.ObjectServiceFactory;

import webservice.xfire.selfobj.server.IAddressManagerMap;
import webservice.xfire.selfobj.server.model.Address;

public class ClientMap {

	private static final String url = "http://localhost:8000/Ext3/services/AddressManagerMap" ;
	private static final String namespace = "webservice.xfire.selfobj.server" ;
	public static void getAddressMap() {
		Service serviceModel = new ObjectServiceFactory().create(IAddressManagerMap.class,null,namespace,null) ;
		try {
			IAddressManagerMap service = (IAddressManagerMap)new XFireProxyFactory().create(serviceModel,url) ;
			Map<Integer,Address> map = (Map<Integer,Address>)service.getAddressMap() ;
			System.out.println("Map Size: "+map.size());
			for(Iterator<Integer> iter = map.keySet().iterator();iter.hasNext();) {
				Integer key = iter.next() ;
				Address address = map.get(key) ;
				System.out.println(address);
			}
		} catch (MalformedURLException e) {
			e.printStackTrace() ;
		}
	}
	public static void setAddressMap() {
		Service serviceModel = new ObjectServiceFactory().create(IAddressManagerMap.class,null,namespace,null) ;
		try {
			IAddressManagerMap service = (IAddressManagerMap)new XFireProxyFactory().create(serviceModel,url) ;
			Map<Integer,Address> map = new HashMap<Integer,Address>() ;
			Address address = new Address() ;
			address.setIdentifier(1) ;
			address.setAddress("Haidian") ;
			address.setCity("Beijing") ;
			address.setCountry("China") ;
			address.setPoatalCode("100081") ;
			address.setProvince("Beijing") ;
			address.setExist(false) ;
			address.setArray(new String[]{"1","2","3"}) ;
			map.put(address.getIdentifier(), address) ;
			
			address = new Address() ;
			address.setIdentifier(2) ;
			address.setAddress("Chaoyang") ;
			address.setCity("Beijing") ;
			address.setCountry("China") ;
			address.setPoatalCode("100081") ;
			address.setProvince("Beijing") ;
			address.setExist(true) ;
			address.setArray(new String[]{"A","B","C"}) ;
			map.put(address.getIdentifier(), address) ;
			Map<Integer,Address> mapReturn = (Map<Integer,Address>)service.setAddressMap(map) ;
			System.out.println("Map Size: "+mapReturn.size());
			for(Iterator<Integer> iter = mapReturn.keySet().iterator();iter.hasNext();) {
				Integer key = iter.next() ;
				Address address1 = mapReturn.get(key) ;
				System.out.println(address1);
			}
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ;
		}
	}
	public static void main(String[] args) {
		getAddressMap() ;
		setAddressMap() ;
	}

}
