package com.scs.nemo.product.dto;

import com.scs.nemo.product.ProductImage;
import com.scs.nemo.review.dto.ReviewResponseDto;
import lombok.*;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductResponseDto {
    private Long id;
    private String name;
    private String description;
    private String category;
    private Set<ProductImage> images;
    private Double avg;
    private Set<ReviewResponseDto> reviews;
}
