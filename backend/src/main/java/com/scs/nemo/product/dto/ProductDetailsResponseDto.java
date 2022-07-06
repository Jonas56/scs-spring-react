package com.scs.nemo.product.dto;

import com.scs.nemo.product.ProductColors;
import com.scs.nemo.product.ProductFeature;
import com.scs.nemo.product.ProductImage;
import com.scs.nemo.review.dto.ReviewResponseDto;
import lombok.*;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductDetailsResponseDto {
    private Long id;
    private String name;
    private String description;
    private String category;
    private Double avg = 0.0;
    private Double price;
    private Set<ProductImage> images;
    private Set<ReviewResponseDto> reviews;
    private Set<ProductFeature> features;
    private Set<ProductColors> colors;
}
