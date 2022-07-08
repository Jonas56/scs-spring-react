package com.scs.nemo.product;

import com.scs.nemo.product.dto.ProductDetailsResponseDto;
import com.scs.nemo.product.dto.ProductResponseDto;
import com.scs.nemo.review.Review;
import com.scs.nemo.review.dto.ReviewRequestDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
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

    @Operation(summary = "Fetch all products")
    @GetMapping("/products")
    public List<ProductResponseDto> getProducts(@RequestParam(required = false) String name) {
        Type listType = new TypeToken<List<ProductResponseDto>>() {
        }.getType(); // Get List<ProductResponseDto> type
        if (name == null) {
            return modelMapper.map(productService.getProducts(), listType); // Map List<Product> to List<ProductResponseDto>
        } else {
            return modelMapper.map(productService.getProductLike(name), listType); // Map List<Product> to List<ProductResponseDto>
        }
    }

    @Operation(summary = "Fetch product by id")
    @GetMapping("/products/{productId}")
    public ProductDetailsResponseDto getProductById(@PathVariable Long productId) {
        return modelMapper.map(productService.getProductById(productId), ProductDetailsResponseDto.class);
    }

    // Add review
    @Operation(summary = "Add review", security = @SecurityRequirement(name = "bearerAuth"))
    @PostMapping("/products/{productId}/reviews")
    public void addReview(@PathVariable Long productId, @RequestBody ReviewRequestDto reviewRequestDto, HttpServletRequest request) {
        Review review = modelMapper.map(reviewRequestDto, Review.class);
        productService.addReview(request, productId, review);
    }
}
