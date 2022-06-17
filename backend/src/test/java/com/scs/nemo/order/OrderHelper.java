package com.scs.nemo.order;

import com.scs.nemo.order.dto.OrderRequestDto;
import com.scs.nemo.product.Product;

import java.util.HashSet;

public class OrderHelper {
    public static OrderRequestDto buildOrderDto() {
        return OrderRequestDto.build(
                "Address goes here",
                123456L,
                new HashSet<>() {{
                    add(new OrderDetails(
                            new Product(2L),
                            1,
                            19000L
                    ));
                }});
    }
}
