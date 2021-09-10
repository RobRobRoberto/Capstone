package com.robert.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


//noargs and allargs construtor missing

@Entity
@Getter
@Setter
@Table(name="user_table")
public class UserEntity {


    @Id
    @GeneratedValue
    //Tabelle darf nie leer sein-> nullable condition
    // Die ID sollte nicht heraus gegeben werden.
    @Column(name ="user_id", nullable = false)
    private Long userId;

    //Eingabe muss eineindeutig sein-> unique condition
    @Column(name ="user_name", nullable = false,unique = true)
    private String userName;

    @Column(name="password",nullable = false)
    private String password;


}
