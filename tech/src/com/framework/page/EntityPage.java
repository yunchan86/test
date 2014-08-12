package com.framework.page;

import java.util.List;

public class EntityPage<E> extends BasicPage{//用java的泛型处理
	private List<E> list = null ;
	public EntityPage(int total,int curr,int pre,int next,int pageNum,boolean flag,List<E> l) {
		this.totalPage=total ;
		this.currPage = curr ;
		this.prePage = pre ;
		this.nextPage= next ;
		this.pageNum = pageNum ;
		this.nextFlag = flag ;
		this.list = l ;
	}
	public EntityPage(BasicPage bp,List<E> l) {
		this.totalPage = bp.totalPage ;
		this.currPage = bp.currPage ;
		this.prePage = bp.prePage ;
		this.nextPage = bp.nextPage ;
		this.pageNum = bp.pageNum ;
		this.nextFlag = bp.nextFlag ;
		this.list = l ;
	}
	public EntityPage() {}
	public List<E> getList() {
		return list;
	}
	public void setList(List<E> list) {
		this.list = list;
	}
	public void printString() {
		System.out.println(this.list) ;
	}
}
