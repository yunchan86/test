package webservice.cxf.bean;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;

@XmlType(name="ClientAddress")
@XmlAccessorType(XmlAccessType.FIELD)
public class AddressClient implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer identifier ;
	private String address ;
	private String city ;
	private String province ;
	private String country ;
	private String poatalCode ;
	private String[] array ;
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
	public Map<Integer, InnerClass> getMap() {
		return map;
	}
	public void setMap(Map<Integer, InnerClass> map) {
		this.map = map;
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
	private List<Integer> list ;
	private Map<Integer,InnerClass> map ;
	private boolean isExist ;
	private InnerClass innC ;
	
	public AddressClient() {
		list = new ArrayList<Integer>() ;
		list.add(1) ;
		list.add(2) ;
		list.add(3) ;
		map = new HashMap<Integer,InnerClass>() ;
		map.put(1, new InnerClass("A")) ;
		map.put(2, new InnerClass("B")) ;
		map.put(3, new InnerClass("C")) ;
		innC = new InnerClass() ;
		innC.setInnerName("·þÎñÆ÷¶Ë£ºAddress.InnerClass") ;
	}
	public String toString() {
		String returnStr = super.toString()
		+"idºÅ£º"+getIdentifier()
		+" address£º"+getAddress()
		+" city£º"+getCity()
		+" country£º"+getCountry()
		+" postalCode£º"+getPoatalCode()
		+" province£º"+getProvince()
		+" array£º"+getArray()
		+" map£º"+getMap()
		+" list£º"+getList()
		+" array: "+getArray()
		+" isExist£º"+isExist() 
		+" innerClass.name£º"+getInnC().getInnerName() ;
		return returnStr ;
	}
	
	@XmlType(name="ServerInnerClass")
	@XmlAccessorType(XmlAccessType.FIELD)
	public static class InnerClass implements Serializable {
		private static final long serialVersionUID = 7540359906432882075L;
		private String innerName="static innerClass"  ;
		public InnerClass(String innerName) {
			super() ;
			this.innerName = innerName ;
		}
		public InnerClass() {}
		public String getInnerName() {
			return innerName;
		}
		public void setInnerName(String innerName) {
			this.innerName = innerName;
		}
	}
}
