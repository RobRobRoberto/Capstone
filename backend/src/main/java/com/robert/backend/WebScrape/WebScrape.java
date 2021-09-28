package com.robert.backend.WebScrape;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

public class WebScrape {

    public static void main(String[] args) {

    final String url = "https://www.spiegel.de/kultur/bestseller-buecher-belletristik-sachbuch-auf-spiegel-liste-a-458623.html";

    try{
        final Document document = Jsoup.connect(url).get();
        System.out.println(document);

        for (Element row :
                document.select(
                        "section.clear-both.w-full.mx-auto.lg:my-48.md:my-32.sm:my-24 tr"
                )) {
            final String ticker = row.select("block.font-sansUI.font-bold.lg:text-xl.md:text-xl.sm:text-base.mb-4").text();



        }

    }
    catch(Exception ex){
        ex.printStackTrace();
    }

    }


}
