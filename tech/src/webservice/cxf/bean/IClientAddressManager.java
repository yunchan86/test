package webservice.cxf.bean;

import java.util.List;

import javax.jws.WebService;
@WebService
public interface IClientAddressManager {
	public List<AddressClient> getAddressList() ;
	public List<AddressClient> setAddressList(List<AddressClient> list) ;
}
