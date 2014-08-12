package se.lunce.test;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Date;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.DateTools;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.queryParser.ParseException;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.SimpleFSDirectory;
import org.apache.lucene.util.Version;

public class CreateIndex {
	public void create()throws IOException, ParseException {
		//保存索引文件的地方  
        String indexDir = "F:\\indexDir";  
        //将要搜索TXT文件的地方  
        String dateDir = "E:\\bankbill\\run";  
        IndexWriter indexWriter = null;  
        //创建Directory对象  
        Directory dir = new SimpleFSDirectory(new File(indexDir));  
        //创建IndexWriter对象,第一个参数是Directory,第二个是分词器,第三个表示是否是创建,如果为false为在此基础上面修改,第四表示表示分词的最大值，比如说new MaxFieldLength(2)，就表示两个字一分，一般用IndexWriter.MaxFieldLength.LIMITED   
        indexWriter = new IndexWriter(dir,new StandardAnalyzer(Version.LUCENE_34),true,IndexWriter.MaxFieldLength.UNLIMITED);  
        File[] files = new File(dateDir).listFiles();  
        for (int i = 0; i < files.length; i++) {
        	if(files[i].isDirectory()) continue ;
            Document doc = new Document();  
            //创建Field对象，并放入doc对象中  
            doc.add(new Field("contents", new FileReader(files[i])));   
            doc.add(new Field("filename", files[i].getName(),   
                                Field.Store.YES, Field.Index.ANALYZED));  
            doc.add(new Field("indexDate",DateTools.dateToString(new Date(), DateTools.Resolution.DAY),Field.Store.YES,Field.Index.NOT_ANALYZED));  
            //写入IndexWriter  
            indexWriter.addDocument(doc);  
        }  
        //查看IndexWriter里面有多少个索引  
        System.out.println("numDocs"+indexWriter.numDocs());  
        indexWriter.close();  
	}
	
	public static void main(String args[])throws IOException, ParseException {
		CreateIndex ci = new CreateIndex() ;
		ci.create() ;
	}
}
