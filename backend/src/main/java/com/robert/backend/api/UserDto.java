package com.robert.backend.api;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
//Das DTO ist das, was raus geht.
public class UserDto {

    //Für Swagger können hier noch Annotierungen gemacht werden. '@ApiModelProperty'
    private String username;

    //Für Swagger können hier noch Annotierungen gemacht werden. '@ApiModelProperty'
    private String password;



}
