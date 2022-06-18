package com.scs.nemo.product;

import com.scs.nemo.review.Review;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface IProductService {

    List<Product> getProducts();

    Product getProductById(Long productId);

    Product addReview(HttpServletRequest request, Long productId, Review review);
}
