package com.scs.nemo.product.dto;

import com.scs.nemo.product.ProductImage;
import com.scs.nemo.review.dto.ReviewResponseDto;
import lombok.*;

import javax.persistence.OrderBy;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductResponseDto {
    private Long id;
    private String name;
    private String category;
    private List<ImageDto> images;
    private Double price;
}
