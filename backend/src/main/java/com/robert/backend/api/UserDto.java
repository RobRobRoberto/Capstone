package com.robert.backend.api;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
//Das DTO ist das, was raus geht.
public class UserDto {

    //Für Swagger können hier noch Annotierungen gemacht werden. '@ApiModelProperty'
    private String userName;

    //Für Swagger können hier noch Annotierungen gemacht werden. '@ApiModelProperty'
    private String password;



}
