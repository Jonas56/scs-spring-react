package com.scs.nemo.order.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor(staticName = "build")
public class OrderRequestDto {
    @NotEmpty(message = "Shipping address cannot be empty!")
    private String orderShipping;
    @NotNull(message = "Total cannot be empty!")
    private Long orderTotal;
    @NotEmpty(message = "Order details cannot be empty!")
    private Set<OrderDetailsRequestDto> orderDetails;
}
