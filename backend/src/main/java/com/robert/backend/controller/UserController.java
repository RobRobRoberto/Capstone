package com.robert.backend.controller;


import com.robert.backend.api.UserDto;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.ResponseEntity.badRequest;

@RestController
//'@CrossOrigin' egal wer aufruft -> erhält Daten.
@RequestMapping("/user")
@Tag(name = UserController.USER_CONTROLLER_TAG, description = "provides CRUD operations")
@Api(
        tags = UserController.USER_CONTROLLER_TAG
)
public class UserController {

    public static final String USER_CONTROLLER_TAG = "User";

    //ResponseEntity gibt uns mehr Kontrolle über den Rückgabewert.
    @PostMapping
    public ResponseEntity<UserDto> create(@RequestBody UserDto userDto) {


        return badRequest().build();
    }

}
