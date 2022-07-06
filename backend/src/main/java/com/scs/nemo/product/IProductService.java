package com.scs.nemo.product;

import com.scs.nemo.review.Review;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface IProductService {

    List<Product> getProducts();

    Product getProductById(Long productId);

    List<Product> getProductLike(String keyword);

    void addReview(HttpServletRequest request, Long productId, Review review);
}
