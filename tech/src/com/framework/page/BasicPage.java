package com.framework.page;

public class BasicPage {
	protected int totalRow ;//������
	protected int totalPage=1 ;//��ҳ��
	protected int currPage=1 ;//��ǰҳ��
	protected int prePage=0 ;//��һҳ��
	protected int nextPage=0 ;//��һҳ��
	protected int pageNum=20 ;//ÿҳ������
	protected int currNum=0 ;//��ǰҳ����
	protected boolean nextFlag=false ;//�Ƿ������һҳ
	protected boolean preFlag = false ;
	protected int startNum = 0 ;
	protected int endNum = 0 ;
	public BasicPage(int total,int curr) {
		this.totalPage=total ;
		this.currPage = curr ;
	}
	public BasicPage() {}
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}
	public int getCurrPage() {
		return currPage;
	}
	public void setCurrPage(int currPage) {
		this.currPage = currPage;
		if(this.currPage==this.totalPage) {
			this.nextPage=0 ;
			this.nextFlag = false ;
		}else {
			this.nextPage = this.currPage+1 ;
			this.nextFlag = true ;
		}
		if(this.currPage==1) {
			this.prePage = 0 ;
			this.preFlag = false ;
		}else {
			this.prePage = this.currPage-1 ;
			this.preFlag = true ;
		}
		if(this.currPage*this.pageNum<this.totalRow) {
			this.endNum = this.currPage*this.pageNum ;
			this.startNum = (this.currPage-1)*this.pageNum+1 ;
		}else {
			this.endNum = this.totalRow ;
			this.startNum = (this.currPage-1)*this.pageNum+1 ;
		}
	}
	public int getPrePage() {
		return prePage;
	}
	public void setPrePage(int prePage) {
		this.prePage = prePage;
	}
	public int getNextPage() {
		return nextPage;
	}
	public void setNextPage(int nextPage) {
		this.nextPage = nextPage;
	}
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getCurrNum() {
		return currNum;
	}
	public void setCurrNum(int currNum) {
		this.currNum = currNum;
	}
	public boolean isNextFlag() {
		return nextFlag;
	}
	public void setNextFlag(boolean nextFlag) {
		this.nextFlag = nextFlag;
	}
}
