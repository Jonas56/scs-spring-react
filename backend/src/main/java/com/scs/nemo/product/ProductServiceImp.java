package com.scs.nemo.product;

import com.scs.nemo.auth.JwtUtil;
import com.scs.nemo.review.Review;
import com.scs.nemo.user.User;
import com.scs.nemo.user.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class ProductServiceImp implements IProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public ProductServiceImp(ProductRepository productRepository, UserRepository userRepository) {
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Product not found"));
    }
    public Product getProductByLike(String keyword) {
        return productRepository.getProductLike(keyword).orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Product not found"));
    }
    @Override
    public void addReview(HttpServletRequest request, Long id, Review review) {
        String username = JwtUtil.extractUsernameFromRequest(request); // Get username from JWT
        User user = userRepository.findByUsername(username).orElseThrow(); // Get user from database by username
        review.setUser(user); // Set user to review
        Product product = getProductById(id);
        Double avg = (product.getAvg() * product.getReviews().size() + review.getRating()) / (product.getReviews().size() + 1);
        product.setAvg(avg); // Update average rating
        product.addReview(review); // Add review to product
        productRepository.save(product);
    }


}
