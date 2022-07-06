package com.scs.nemo.order;

import com.scs.nemo.order.dto.OrderDetailsRequestDto;
import com.scs.nemo.order.dto.OrderRequestDto;
import com.scs.nemo.product.Product;
import com.scs.nemo.product.dto.ProductForOrderDetails;

import java.util.HashSet;

public class OrderHelper {
    public static OrderRequestDto buildOrderDto() {
        return OrderRequestDto.build(
                "Address goes here",
                123456L,
                new HashSet<>() {{
                    add(new OrderDetailsRequestDto(
                            new ProductForOrderDetails(2L),
                            1,
                            123L
                    ));
                }});
    }
}
