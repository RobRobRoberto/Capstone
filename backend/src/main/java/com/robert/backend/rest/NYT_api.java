package com.robert.backend.rest;

import feign.RequestLine;

import java.util.List;

//Macht die Requests
public interface NYT_api {

        //Das Ergebis wird in das DTO gelegt.
        @RequestLine("GET ?list=hardcover-fiction&api-key=tq3E8QvBGJjNqWjWFYKJCYY3n86Xror1")
        NYT_dto getList();
    }


