package com.scs.nemo.order.dto;

import com.scs.nemo.product.Product;
import com.scs.nemo.product.dto.ProductForOrderDetails;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderDetailsDto {
    private ProductForOrderDetails product;
    private Integer quantity;
    private Long totalPrice;
}
