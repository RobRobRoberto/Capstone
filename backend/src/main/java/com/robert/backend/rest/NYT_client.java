package com.robert.backend.rest;


import feign.Feign;
import feign.gson.GsonDecoder;
import feign.gson.GsonEncoder;
import feign.okhttp.OkHttpClient;
import org.springframework.stereotype.Component;

import java.util.List;

//Logger und LogLevel gelöscht im builder gelöscht.
@Component
public class NYT_client {

    private final NYT_api nYT_api;

    //Beim erzeugen wird die API vorkonfiguriert.
    // Wir geben Objekte rein und bekommen JSON heraus
    public NYT_client() {
        nYT_api = Feign.builder()
                .client(new OkHttpClient())
                .encoder(new GsonEncoder())
                .decoder(new GsonDecoder())
                .target(NYT_api.class, "https://api.nytimes.com/svc/books/v3/lists.json");
    }

    public NYT_dto getBestList() {

        return nYT_api.getList();
    }
}
