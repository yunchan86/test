package webservice.xfire.selfobj.client;

import java.util.List;

import webservice.xfire.selfobj.server.model.Address;

public interface IClientAddressManager {
	public List<Address> getAddressList() ;
	public List<Address> setAddressList(List<Address> list) ;
}
