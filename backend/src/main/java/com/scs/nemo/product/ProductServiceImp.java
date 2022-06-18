package com.scs.nemo.product;

import com.scs.nemo.order.dto.OrderResponseDto;
import com.scs.nemo.review.Review;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class ProductServiceImp implements IProductService {

    private final ProductRepository productRepository;

    public ProductServiceImp(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Product not found"));
    }

    @Override
    public Product addReview(Long id, Review review) {
        Product product = getProductById(id);
        product.addReview(review);
        return productRepository.save(product);
    }

}
