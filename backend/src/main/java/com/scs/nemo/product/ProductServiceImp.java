package com.scs.nemo.product;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImp
{
    private final ProductRepository productRepository;

    public ProductServiceImp(ProductRepository productRepository)
    {
        this.productRepository = productRepository;
    }

    public List<Product> getProducts()
    {
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id)
    {
        return productRepository.findById(id);
    }

    public Double getAVG(Long id){
        return productRepository.getAVG(id);
    }

}
