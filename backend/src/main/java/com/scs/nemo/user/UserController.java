package com.scs.nemo.user;

import com.scs.nemo.user.dto.UserProfileResponseDto;
import com.scs.nemo.user.dto.UserRequestDto;
import com.scs.nemo.user.dto.UserRequestForProfileDto;
import com.scs.nemo.user.dto.UserResponseDto;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping(value = "/api/v1", produces = "application/json")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final IUserService userService;
    private final ModelMapper modelMapper;

    public UserController(IUserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @PostMapping("/register")
    public UserResponseDto registerNewUser(@RequestBody @Valid UserRequestDto userRequestDto) {
        User user = modelMapper.map(userRequestDto, User.class);
        return modelMapper.map(userService.register(user), UserResponseDto.class);
    }

    @GetMapping("/users/me")
    public UserProfileResponseDto getUserProfile(HttpServletRequest request) {
        return modelMapper.map(userService.getUserProfile(request), UserProfileResponseDto.class);
    }

    @PutMapping("/users/edit")
    public UserResponseDto editUser(HttpServletRequest request, HttpServletResponse response, @RequestBody @Valid UserRequestForProfileDto userRequestDto) {
        User user = modelMapper.map(userRequestDto, User.class);
        return modelMapper.map(userService.editUser(request, response, user), UserResponseDto.class);
    }
}
