package com.scs.nemo.product;

import com.scs.nemo.order.dto.OrderResponseDto;
import com.scs.nemo.product.dto.ProductResponseDto;
import com.scs.nemo.review.Review;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Type;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class ProductController {

    private final IProductService productService;
    private final ModelMapper modelMapper;

    public ProductController(IProductService productService, ModelMapper modelMapper) {
        this.productService = productService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/products")
    public List<ProductResponseDto> getProducts() {
        Type listType = new TypeToken<List<ProductResponseDto>>() {
        }.getType(); // Get List<ProductResponseDto> type
        return modelMapper.map(productService.getProducts(), listType); // Map List<Product> to List<ProductResponseDto>
    }

    @GetMapping("/products/{productId}")
    public Product getProductById(@PathVariable Long productId) {
        return productService.getProductById(productId);
    }

    @PutMapping("/products/{productId}")
    public Product addReview(@PathVariable Long productId, @RequestBody Review review) {
        return productService.addReview(productId, review);
    }
}
