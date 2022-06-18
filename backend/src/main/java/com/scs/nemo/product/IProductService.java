package com.scs.nemo.product;

import java.util.List;

public interface IProductService {

    List<Product> getProducts();

    Product getProductById(Long id);

    Double getAVG(Long id);
}
