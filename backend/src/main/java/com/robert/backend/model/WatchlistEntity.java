package com.robert.backend.model;


import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "watchlist")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class WatchlistEntity {

    @Id
    @GeneratedValue
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "book", nullable = false)
    private String book;

    @Column(name = "author", nullable = false)
    private String author;
}
