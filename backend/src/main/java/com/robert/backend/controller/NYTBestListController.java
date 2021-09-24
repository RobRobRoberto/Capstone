package com.robert.backend.controller;


import com.robert.backend.rest.NYT_client;
import com.robert.backend.rest.NYT_dto;
import com.robert.backend.service.NYTBestListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.ResponseEntity.ok;


//Auf Swagger Tag verzichtet
@RestController
@CrossOrigin
@RequestMapping("/nyt")
public class NYTBestListController {

    private final NYT_client nyt_client;
    private final NYTBestListService nytBestListService;

    @Autowired
    public NYTBestListController(NYT_client nyt_client, NYTBestListService nytBestListService) {
        this.nyt_client = nyt_client;
        this.nytBestListService = nytBestListService;
    }


    @GetMapping
    public ResponseEntity<NYT_dto> find() {
        NYT_dto nyt_dto = nyt_client.getBestList();


        nytBestListService.fillTable(nyt_dto);


        return ok(nyt_dto);

    }

}
