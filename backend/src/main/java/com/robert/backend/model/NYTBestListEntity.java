package com.robert.backend.model;

import lombok.*;

import javax.persistence.*;


@Entity
@Getter
@Setter
@Table(name = "nyt_bestlist")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NYTBestListEntity {


    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "book", nullable = false)
    private String book;

    @Column(name = "author", nullable = false)
    private String author;

//    @Column(name = "isbn_13", nullable = false)
//    private String isbn_13;
}
