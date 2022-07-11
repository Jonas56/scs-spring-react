package com.scs.nemo.user;

import com.scs.nemo.AbstractTest;
import com.scs.nemo.user.dto.UserProfileResponseDto;
import com.scs.nemo.user.dto.UserRequestForProfileDto;
import com.scs.nemo.user.dto.UserResponseDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserControllerTests extends AbstractTest {

    String accessToken;

    @BeforeEach
    @Override
    protected void setUp() throws Exception {
        super.setUp();
        accessToken = authenticate();
    }

    @Test
    void shouldSuccessfullyGetUserProfile() throws Exception {
        // given a user is logged in
        String uri = "/api/v1/users/me";
        // when the user requests the user profile
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                        .header("Authorization", "Bearer " + accessToken)
                        .accept(MediaType.APPLICATION_JSON))
                .andReturn();
        // then the user profile is returned
        String content = mvcResult.getResponse().getContentAsString();
        UserProfileResponseDto userProfile = super.mapFromJson(content, UserProfileResponseDto.class);
        assertThat(userProfile).isNotNull();
    }

    @Test
    void shouldSuccessfullyUpdateUser() throws Exception {
        // given a user is logged in and has a profile
        String uri = "/api/v1/user/edit";
        UserRequestForProfileDto validUser = UserRequestForProfileDto.build(
                "Jonas Tesla",
                "Issac56",
                "issac@tesla.com"
        );

        String inputJson = super.mapToJson(validUser);
        // when the user requests to update their profile
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.put(uri)
                        .header("Authorization", "Bearer " + accessToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(inputJson)
                )
                .andReturn();
        // then the user profile is updated
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        UserResponseDto userProfile = super.mapFromJson(content, UserResponseDto.class);
        assertThat(userProfile).isNotNull();
        String refreshedAccessToken = mvcResult.getResponse().getHeader("Authorization");
        assertThat(refreshedAccessToken).isNotNull();
    }
}
