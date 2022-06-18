package com.scs.nemo.product;

import com.scs.nemo.order.dto.OrderResponseDto;
import com.scs.nemo.product.dto.ProductResponseDto;
import com.scs.nemo.review.Review;
import com.scs.nemo.review.dto.ReviewRequestDto;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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

    // Add review
    @PostMapping("/products/{productId}/reviews")
    public void addReview(@PathVariable Long productId, @RequestBody ReviewRequestDto reviewRequestDto, HttpServletRequest request) {
        Review review = modelMapper.map(reviewRequestDto, Review.class);
        productService.addReview(request, productId, review);
    }
}
