package com.robert.backend.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Table(name="user_table")
public class UserEntity {

    @Id
    @GeneratedValue
    @Column(name ="user_id", nullable = false)
    private Long userId;

    @Column(name ="user_name")
    private String userName;

    @Column(name="password")
    private String password;


}
