package com.framework.page.test;

import java.util.ArrayList;
import java.util.List;

import com.framework.page.EntityPage;

public class UserView {
	private String userName ;
	private String password ;
	private String trueName ;
	private String sex ;
	public UserView(String userName,String password,String trueName,String sex) {
		this.userName = userName ;
		this.password = password ;
		this.trueName = trueName ;
		this.sex = sex ;
	}
	public UserView() {} 
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getTrueName() {
		return trueName;
	}
	public void setTrueName(String trueName) {
		this.trueName = trueName;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	
	public static void main(String[] args) {
		List<UserView> list = new ArrayList<UserView>() ;
		UserView u1 = new UserView("user1","user1","用户1","男") ;
		UserView u2 = new UserView("user2","user2","用户2","男") ;
		UserView u3 = new UserView("user3","user3","用户3","男") ;
		UserView u4 = new UserView("user4","user4","用户4","男") ;
		list.add(u1);
		list.add(u2);
		list.add(u3);
		list.add(u4);
		EntityPage<UserView> ep = new EntityPage<UserView>(1,1,1,1,20,true,list) ;
		ep.printString() ;
	}
}
