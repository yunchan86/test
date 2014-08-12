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
		//���������ļ��ĵط�  
        String indexDir = "F:\\indexDir";  
        //��Ҫ����TXT�ļ��ĵط�  
        String dateDir = "E:\\bankbill\\run";  
        IndexWriter indexWriter = null;  
        //����Directory����  
        Directory dir = new SimpleFSDirectory(new File(indexDir));  
        //����IndexWriter����,��һ��������Directory,�ڶ����Ƿִ���,��������ʾ�Ƿ��Ǵ���,���ΪfalseΪ�ڴ˻��������޸�,���ı�ʾ��ʾ�ִʵ����ֵ������˵new MaxFieldLength(2)���ͱ�ʾ������һ�֣�һ����IndexWriter.MaxFieldLength.LIMITED   
        indexWriter = new IndexWriter(dir,new StandardAnalyzer(Version.LUCENE_34),true,IndexWriter.MaxFieldLength.UNLIMITED);  
        File[] files = new File(dateDir).listFiles();  
        for (int i = 0; i < files.length; i++) {
        	if(files[i].isDirectory()) continue ;
            Document doc = new Document();  
            //����Field���󣬲�����doc������  
            doc.add(new Field("contents", new FileReader(files[i])));   
            doc.add(new Field("filename", files[i].getName(),   
                                Field.Store.YES, Field.Index.ANALYZED));  
            doc.add(new Field("indexDate",DateTools.dateToString(new Date(), DateTools.Resolution.DAY),Field.Store.YES,Field.Index.NOT_ANALYZED));  
            //д��IndexWriter  
            indexWriter.addDocument(doc);  
        }  
        //�鿴IndexWriter�����ж��ٸ�����  
        System.out.println("numDocs"+indexWriter.numDocs());  
        indexWriter.close();  
	}
	
	public static void main(String args[])throws IOException, ParseException {
		CreateIndex ci = new CreateIndex() ;
		ci.create() ;
	}
}
