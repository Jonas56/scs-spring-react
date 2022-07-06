package com.scs.nemo.order.dto;

import com.scs.nemo.order.OrderStatus;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Data
@Getter
@Setter
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class OrderResponseDto {
    private Long id;
    private String orderShipping;
    private String orderNumber;
    private OrderStatus orderStatus;
    private Date orderDate;
    private Long orderTotal;
}
