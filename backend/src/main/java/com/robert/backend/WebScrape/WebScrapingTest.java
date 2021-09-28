package com.robert.backend.WebScrape;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

public class WebScrapingTest {
    public static void main(String[] args) {

        final String url = "https://www.imdb.com/chart/top/?ref_=nv_mv_250";

        try{
            final Document document = Jsoup.connect(url).get();


            //"tr" missing after the table name
            for (Element row :
                    document.select(
                            "table.chart.full-width"
                    )) {
                if(row.select("td.titleColumn").text().equals("")){
                    continue;
                }
                else {
                final String ticker = row.select("td.titleColumn").text();
                    System.out.println(ticker);
                }

            }

        }
        catch(Exception ex){
            ex.printStackTrace();
        }

    }

}
