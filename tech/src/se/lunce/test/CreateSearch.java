package se.lunce.test;

import java.io.File;
import java.io.IOException;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.queryParser.ParseException;
import org.apache.lucene.queryParser.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.SimpleFSDirectory;
import org.apache.lucene.util.Version;

public class CreateSearch {
	public void create() throws IOException, ParseException{
		//���������ļ��ĵط�  
        String indexDir = "F:\\indexDir";  
        Directory dir = new SimpleFSDirectory(new File(indexDir));  
        //���� IndexSearcher�������IndexWriter�������������Ҫ�ṩһ��������Ŀ¼������  
        IndexSearcher indexSearch = new IndexSearcher(dir);  
        //����QueryParser����,��һ��������ʾLucene�İ汾,�ڶ�����ʾ����Field���ֶ�,��������ʾ����ʹ�÷ִ���  
        QueryParser queryParser = new QueryParser(Version.LUCENE_30,  
                "contents", new StandardAnalyzer(Version.LUCENE_30));  
        //����Query����  
        Query query = queryParser.parse("���ѳ���");  
        //������� TopDocs������scoreDocs[]���飬���汣��������ֵ  
        TopDocs hits = indexSearch.search(query, 10);  
        //hits.totalHits��ʾһ���ѵ����ٸ�  
        System.out.println("�ҵ���"+hits.totalHits+"��");  
        //ѭ��hits.scoreDocs���ݣ���ʹ��indexSearch.doc������Document��ԭ�����ó���Ӧ���ֶε�ֵ  
        for (int i = 0; i < hits.scoreDocs.length; i++) {  
            ScoreDoc sdoc = hits.scoreDocs[i];  
            Document doc = indexSearch.doc(sdoc.doc);  
            System.out.println(doc.get("filename"));              
        }         
        indexSearch.close();
	}
	
	public static void main(String args[])throws IOException, ParseException {
		CreateSearch cs = new CreateSearch() ;
		cs.create() ;
	}
}
