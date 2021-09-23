package com.robert.backend.rest;

import lombok.Data;

//Die Serveranfrage wird in dieses DTO geparst.
@Data
public class NYT_dto {
    private NYT_results_dto[] results;
}
