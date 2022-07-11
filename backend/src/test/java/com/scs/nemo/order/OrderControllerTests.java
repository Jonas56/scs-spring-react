package com.scs.nemo.order;

import com.scs.nemo.AbstractTest;
import com.scs.nemo.order.dto.OrderResponseDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class OrderControllerTests extends AbstractTest {
    String accessToken;

    @BeforeEach
    @Override
    protected void setUp() throws Exception {
        super.setUp();
        accessToken = super.authenticate();
    }

    @Test
    void shouldSuccessfullyGetAllOrders() throws Exception {
        // Given
        String uri = "/api/v1/orders";
        // When
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
                .header("Authorization", "Bearer " + accessToken)
        ).andReturn();
        // Then
        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        List<OrderResponseDto> orders = super.mapFromJson(mvcResult.getResponse().getContentAsString(), List.class);
        assertThat(orders).isNotNull();
    }

    @Test
    void shouldSuccessfullyAddNewOrder() throws Exception {
        // given
        String uri = "/api/v1/orders";
        String inputJson = super.mapToJson(OrderHelper.buildOrderDto());
        // when
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri)
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(inputJson)
        ).andReturn();

        // then
        int status = mvcResult.getResponse().getStatus();
        assertEquals(201, status);
        OrderResponseDto orderResponse = super.mapFromJson(mvcResult.getResponse().getContentAsString(), OrderResponseDto.class);
        assertThat(orderResponse).isNotNull();
    }
}
