package com.scs.nemo.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("select avg(r.rating) from Product p join p.reviews r where p.id= :id ")
    Double getAVG(Long id);
    @Query(value = "select * from products p left join reviews r on r.product_id = p.id where p.description like %:keyword% or r.comment like %:keyword%",nativeQuery = true)
    List<Product> getProductsLike(String keyword);


}
