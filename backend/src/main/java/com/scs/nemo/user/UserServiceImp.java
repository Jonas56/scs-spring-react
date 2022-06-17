package com.scs.nemo.user;

import com.scs.nemo.auth.JwtUtil;
import com.scs.nemo.user.dto.UserRequestForProfileDto;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public class UserServiceImp implements IUserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImp(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User register(User user) {
        boolean userExists = userRepository.existsByUsernameOrEmail(user.getUsername(), user.getEmail());
        if (userExists) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User getUserProfile(HttpServletRequest request) {
        String username = JwtUtil.extractUsernameFromRequest(request);
        return userRepository.findByUsername(username)
                .orElseThrow(
                        () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
                );
    }

    @Override
    public User editUser(HttpServletRequest request, HttpServletResponse response, User user) {
        String username = JwtUtil.extractUsernameFromRequest(request);
        User userUpdated = userRepository.findByUsername(username)
                .map(u -> {
                    u.setName(user.getName());
                    u.setUsername(user.getUsername());
                    u.setEmail(user.getEmail());
                    return userRepository.save(u);
                })
                .orElseThrow(
                        () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User with username " + username + " not found")
                );

        // refresh token if username changed
        if (!username.equals(userUpdated.getUsername())) {
            JwtUtil.refreshToken(response, userUpdated.getUsername());
        }
        return userUpdated;
    }
}
