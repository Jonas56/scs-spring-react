package com.scs.nemo.user;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface IUserService {

    User register(User user);

    User getUserProfile(HttpServletRequest request);

    User editUser(HttpServletRequest request, HttpServletResponse response, User user);
}
