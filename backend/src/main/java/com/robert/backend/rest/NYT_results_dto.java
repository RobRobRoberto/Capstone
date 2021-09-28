package com.robert.backend.rest;

import lombok.Data;

@Data
public class NYT_results_dto {
    private String list_name;
    private int rank;
    private NYT_isbn_dto[] isbns;
    private NYT_bookDetails_dto[] book_details;



}
