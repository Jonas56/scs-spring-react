package com.scs.nemo.user;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/api/v1", produces = "application/json")
public class UserController {

    private final IUserService authService;
    private final ModelMapper modelMapper;

    public UserController(IUserService userService, ModelMapper modelMapper) {
        this.authService = userService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/register")
    public UserResponseDto registerNewUser(@RequestBody @Valid UserRequestDto userRequestDto) {
        User user = modelMapper.map(userRequestDto, User.class);
        return modelMapper.map(authService.register(user), UserResponseDto.class);
    }

    @GetMapping("/users/me")
    public UserResponseDto getUserProfile() {
        return null;
    }
}
