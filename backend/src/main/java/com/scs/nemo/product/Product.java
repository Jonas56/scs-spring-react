package com.scs.nemo.product;


import com.scs.nemo.review.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Product
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private String category;

    @OneToMany
    (
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )

    @JoinColumn(name = "product_id")
    private Set<ProductImage> images;


    @OneToMany
    (
        targetEntity = Review.class,
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.EAGER
    )
    @JoinColumn(name = "product_id")
    private Set<Review> reviews;


    @ManyToMany
    (
        targetEntity = ProductFeature.class,
        fetch = FetchType.EAGER,
        cascade = CascadeType.ALL
    )
    @JoinTable
    (
        name = "product_features",
        joinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn(name = "feature_id", referencedColumnName = "id")
    )
    private Set<ProductFeature> features;

    public Product(long id)
    {
        this.id = id;
    }

    public Product(String name, String description, String category) {
        this.name = name;
        this.description = description;
        this.category = category;
    }

    public void addReview(Review review) {
        reviews.add(review);
    }
}
