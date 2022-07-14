package com.scs.nemo.product;

import com.scs.nemo.auth.JwtUtil;
import com.scs.nemo.review.Review;
import com.scs.nemo.user.User;
import com.scs.nemo.user.UserRepository;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImp implements IProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    public ProductServiceImp(ProductRepository productRepository, UserRepository userRepository) {
        this.productRepository = productRepository;
        this.userRepository = userRepository;
    }

    public List<Product> getProducts() {
        List<Product> products = productRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
        products.forEach(
                product -> product.setImages(List.of(product.getImages().get(0)))
        );
        return products;
    }

    public Product getProductById(Long id) {
        Product product = productRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found")
        );
        product.setImages(
                Arrays.asList(
                        product.getImages().get(0),
                        product.getImages().get(1),
                        product.getImages().get(2),
                        product.getImages().get(3)
                )
        );
        return product;
    }

    public List<Product> getProductLike(String name) {

        List<Product> products = productRepository.findByNameIgnoreCaseContaining(name, Sort.by(Sort.Direction.ASC, "name"));
        products.forEach(
                product -> product.setImages(List.of(product.getImages().get(0)))
        );
        return products;
    }

    @Override
    public void addReview(HttpServletRequest request, Long id, Review review) {
        String username = JwtUtil.extractUsernameFromRequest(request);
        User user = userRepository.findByUsername(username).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")
        );
        Product product = productRepository.findById(id).orElseThrow(
                () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found")
        );
        Double avg = (product.getAvg() * product.getReviews().size() + review.getRating()) / (product.getReviews().size() + 1);
        product.setAvg(avg);
        review.setUser(user);
        product.addReview(review);
        productRepository.save(product);
    }


}
