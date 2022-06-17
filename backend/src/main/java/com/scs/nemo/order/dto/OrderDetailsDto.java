package com.scs.nemo.order;

import com.scs.nemo.product.Product;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderDetailsDto {
    private Product product;
    private Integer quantity;
    private Long totalPrice;
}
