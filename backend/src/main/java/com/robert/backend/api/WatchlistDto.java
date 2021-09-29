package com.robert.backend.api;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class WatchlistDto {

    Long rank;
    String book;
    String author;

}
