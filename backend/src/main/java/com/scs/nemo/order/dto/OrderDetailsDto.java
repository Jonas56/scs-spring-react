package com.scs.nemo.order.dto;

import com.scs.nemo.product.dto.ProductResponseDto;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderDetailsDto {
    private ProductResponseDto product;
    private Integer quantity;
    private Long totalPrice;
}
