package com.scs.nemo.order;

import com.scs.nemo.user.User;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Data
@Getter
@Setter
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class OrderResponseDto {
    private String orderShipping;
    private OrderStatus orderStatus;
    private Date orderDate;
    private Long orderTotal;
    private Set<OrderDetailsDto> orderDetails;
}
