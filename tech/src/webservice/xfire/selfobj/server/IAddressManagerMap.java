package webservice.xfire.selfobj.server;

import java.util.Map;

import webservice.xfire.selfobj.server.model.Address;

public interface IAddressManagerMap {
	public Map<Integer,Address> getAddressMap() ;
	public Map<Integer,Address> setAddressMap(Map<Integer,Address> map) ;
}
