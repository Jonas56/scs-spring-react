package com.scs.nemo.order.dto;

import com.scs.nemo.order.OrderDetails;
import com.scs.nemo.order.OrderStatus;
import com.scs.nemo.user.User;
import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class OrderResponseDetailsDto {
    private Long id;
    private String orderShipping;
    private String orderNumber;
    private OrderStatus orderStatus;
    private Date orderDate;
    private Long orderTotal;
    private List<OrderDetailsDto> orderDetails;
}
