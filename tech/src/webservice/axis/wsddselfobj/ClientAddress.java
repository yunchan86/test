package webservice.axis.wsddselfobj;

import java.net.MalformedURLException;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.xml.namespace.QName;
import javax.xml.rpc.ParameterMode;
import javax.xml.rpc.ServiceException;

import org.apache.axis.client.Call;
import org.apache.axis.client.Service;
import org.apache.axis.encoding.XMLType;

import webservice.axis.wsddselfobj.clientmodel.Address;

public class ClientAddress {
	
	@SuppressWarnings("unchecked")
	public static void getServerList() {
		String url = "http://localhost:8000/axis/services/AddressManager" ;
		Service service = new Service() ;
		try {
			Call call = (Call)service.createCall() ;
			QName qn = new QName("urn:AddressManager","Address") ;
			call.registerTypeMapping(Address.class, qn, 
					new org.apache.axis.encoding.ser.BeanSerializerFactory(Address.class,qn), 
					new org.apache.axis.encoding.ser.BeanDeserializerFactory(Address.class,qn)) ;
			call.setTargetEndpointAddress(new java.net.URL(url)) ;
			call.setOperationName(new QName("AddressManager","getAddressList")) ;
			call.setReturnClass(ArrayList.class) ;
			Object[] sss = null ;
			List<Address> list = (ArrayList)call.invoke(sss) ;
			System.out.println("List size: "+list.size()) ;
			for(Iterator<Address> iter = list.iterator() ;iter.hasNext() ;) {
				Address address = iter.next() ;
				System.out.println("idºÅ£º"+address.getIdentifier()
						+" address£º"+address.getAddress()
						+" city£º"+address.getCity()
						+" country£º"+address.getCountry()
						+" postalCode£º"+address.getPoatalCode()
						+" province£º"+address.getProvince()
						+" array£º"+address.getArray()
						+" list£º"+address.getList()
						+" isExist£º"+address.isExist()
				) ;
			}
		}
		catch(ServiceException e) {
			e.printStackTrace() ;
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ;
		}
		catch(RemoteException e) {
			e.printStackTrace() ;
		}
	}
	@SuppressWarnings("unchecked")
	public static void setServerList() {
		String url = "http://localhost:8000/axis/services/AddressManager" ;
		Service service = new Service() ;
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
		try{
			Call call = (Call)service.createCall() ;
			QName qn = new QName("urn:AddressManager","Address") ;
			call.registerTypeMapping(Address.class, qn, 
					new org.apache.axis.encoding.ser.BeanSerializerFactory(Address.class,qn), 
					new org.apache.axis.encoding.ser.BeanDeserializerFactory(Address.class,qn)) ;
			call.setTargetEndpointAddress(new java.net.URL(url)) ;
			call.setOperationName(new QName("AddressManager","setAddressList")) ;
			call.setReturnClass(ArrayList.class) ;
			call.addParameter("list", XMLType.XSD_ANYTYPE, ParameterMode.IN) ;
			list = (ArrayList<Address>)call.invoke(new Object[]{list}) ;
			System.out.println("List size: "+list.size()) ;
			for(Iterator<Address> iter = list.iterator() ;iter.hasNext() ;) {
				address = iter.next() ;
				System.out.println("idºÅ£º"+address.getIdentifier()
						+" address£º"+address.getAddress()
						+" city£º"+address.getCity()
						+" country£º"+address.getCountry()
						+" postalCode£º"+address.getPoatalCode()
						+" province£º"+address.getProvince()
						+" array£º"+address.getArray()
						+" list£º"+address.getList()
						+" isExist£º"+address.isExist()
				) ;
			}
		}
		catch(ServiceException e) {
			e.printStackTrace() ;
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ;
		}
		catch(RemoteException e) {
			e.printStackTrace() ;
		}
	}
	
	@SuppressWarnings("unchecked")
	public static void getServerMap() {
		String url = "http://localhost:8000/axis/services/AddressManager" ;
		Service service = new Service() ;
		try {
			Call call = (Call)service.createCall() ;
			QName qn = new QName("urn:AddressManager","Address") ;
			call.registerTypeMapping(Address.class, qn, 
					new org.apache.axis.encoding.ser.BeanSerializerFactory(Address.class,qn), 
					new org.apache.axis.encoding.ser.BeanDeserializerFactory(Address.class,qn)) ;
			call.setTargetEndpointAddress(new java.net.URL(url)) ;
			call.setOperationName(new QName("AddressManager","getAddressMap")) ;
			call.setReturnClass(HashMap.class) ;
			Object[] sss = null ;
			Map<Integer,Address> map = (Map)call.invoke(sss) ;
			System.out.println("Map size: "+map.size()) ;
			for(Iterator<Integer> iter = map.keySet().iterator() ;iter.hasNext() ;) {
				Integer key = iter.next() ;
				Address address = map.get(key) ;
				System.out.println("idºÅ£º"+address.getIdentifier()
						+" address£º"+address.getAddress()
						+" city£º"+address.getCity()
						+" country£º"+address.getCountry()
						+" postalCode£º"+address.getPoatalCode()
						+" province£º"+address.getProvince()
						+" array£º"+address.getArray()
						+" list£º"+address.getList()
						+" isExist£º"+address.isExist()
				) ;
			}
		}
		catch(ServiceException e) {
			e.printStackTrace() ;
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ;
		}
		catch(RemoteException e) {
			e.printStackTrace() ;
		}
	}
	@SuppressWarnings("unchecked")
	public static void setServerMap() {
		String url = "http://localhost:8000/axis/services/AddressManager" ;
		Service service = new Service() ;
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
		try{
			Call call = (Call)service.createCall() ;
			QName qn = new QName("urn:AddressManager","Address") ;
			call.registerTypeMapping(Address.class, qn, 
					new org.apache.axis.encoding.ser.BeanSerializerFactory(Address.class,qn), 
					new org.apache.axis.encoding.ser.BeanDeserializerFactory(Address.class,qn)) ;
			call.setTargetEndpointAddress(new java.net.URL(url)) ;
			call.setOperationName(new QName("AddressManager","setAddressMap")) ;
			call.setReturnClass(HashMap.class) ;
			call.addParameter("list", XMLType.XSD_ANYTYPE, ParameterMode.IN) ;
			map = (Map<Integer,Address>)call.invoke(new Object[]{map}) ;
			System.out.println("Map size: "+map.size()) ;
			for(Iterator<Integer> iter = map.keySet().iterator() ;iter.hasNext() ;) {
				Integer key = iter.next() ;
				address = map.get(key) ;
				System.out.println("idºÅ£º"+address.getIdentifier()
						+" address£º"+address.getAddress()
						+" city£º"+address.getCity()
						+" country£º"+address.getCountry()
						+" postalCode£º"+address.getPoatalCode()
						+" province£º"+address.getProvince()
						+" array£º"+address.getArray()
						+" list£º"+address.getList()
						+" isExist£º"+address.isExist()
				) ;
			}
		}
		catch(ServiceException e) {
			e.printStackTrace() ;
		}
		catch(MalformedURLException e) {
			e.printStackTrace() ;
		}
		catch(RemoteException e) {
			e.printStackTrace() ;
		}
	}
	
	public static void main(String[] args) {
		getServerList() ;
		setServerList() ;
		getServerMap() ;
		setServerMap() ;
	}
}
