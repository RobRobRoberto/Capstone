package com.robert.backend.controller;


import com.robert.backend.api.UserDto;
import com.robert.backend.model.UserEntity;
import com.robert.backend.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.ResponseEntity.ok;
//'@CrossOrigin' egal wer aufruft → erhält Daten.
@RestController
@RequestMapping("/user")
@Tag(name = UserController.USER_CONTROLLER_TAG, description = "provides CRUD operations")
@Api(
        tags = UserController.USER_CONTROLLER_TAG
)
public class UserController {

    public static final String USER_CONTROLLER_TAG = "User";
    private  UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    //ResponseEntity gibt uns mehr Kontrolle über den Rückgabewert.
    @PostMapping
    public ResponseEntity<UserDto> create(@RequestBody UserDto userDto) {

        UserEntity userToPersist = new UserEntity();
        userToPersist.setUserName(userDto.getUserName());
        userToPersist.setPassword(userDto.getPassword());

        UserEntity persistedUser = userService.create(userToPersist);
        UserDto createdUser = map(persistedUser);

        return ok(createdUser);
    }

    private UserDto map(UserEntity userEntity) {
        return UserDto.builder()
                .userName(userEntity.getUserName())
                .password(userEntity.getPassword())
                .build();
    }

}
