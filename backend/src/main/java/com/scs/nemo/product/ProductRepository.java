package com.scs.nemo.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("select avg(r.rating) from Product p join p.reviews r where p.id= :id ")
    Double getAVG(Long id);

}
