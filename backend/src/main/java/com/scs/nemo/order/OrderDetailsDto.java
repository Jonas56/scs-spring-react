package com.scs.nemo.order;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderDetailsDto {
    private Long productId;
    private Integer quantity;
    private Long totalPrice;
}
