package com.scs.nemo.product;

import com.scs.nemo.review.Review;

import java.util.List;

public interface IProductService {

    List<Product> getProducts();

    Product getProductById(Long productId);

    Product addReview(Long productId, Review review);
}
