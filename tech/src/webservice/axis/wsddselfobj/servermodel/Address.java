package webservice.axis.wsddselfobj.servermodel;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Address implements Serializable {
	private static final long serialVersionUID = 5182870829593983607L;
	private Integer identifier ;
	private String address ;
	private String city ;
	private String province ;
	private String country ;
	private String poatalCode ;
	private String[] array ;
	private List<Integer> list ;
	private boolean isExist ;
	private InnerClass innC ;
	public static class InnerClass implements Serializable {
		private static final long serialVersionUID = 7540359906432882075L;
		private String innerName  ;
		public String getInnerName() {
			return innerName;
		}
		public void setInnerName(String innerName) {
			this.innerName = innerName;
		}
	}
	public Address() {
		list = new ArrayList<Integer>() ;
		list.add(1) ;
		list.add(2) ;
		list.add(3) ;
		innC = new InnerClass() ;
		innC.setInnerName("My Inner name") ;
	}
	public Integer getIdentifier() {
		return identifier;
	}
	public void setIdentifier(Integer identifier) {
		this.identifier = identifier;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getPoatalCode() {
		return poatalCode;
	}
	public void setPoatalCode(String poatalCode) {
		this.poatalCode = poatalCode;
	}
	public String[] getArray() {
		return array;
	}
	public void setArray(String[] array) {
		this.array = array;
	}
	public List<Integer> getList() {
		return list;
	}
	public void setList(List<Integer> list) {
		this.list = list;
	}
	public boolean isExist() {
		return isExist;
	}
	public void setExist(boolean isExist) {
		this.isExist = isExist;
	}
	public InnerClass getInnC() {
		return innC;
	}
	public void setInnC(InnerClass innC) {
		this.innC = innC;
	}
}
