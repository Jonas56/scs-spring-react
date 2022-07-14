package com.scs.nemo.product;


import com.scs.nemo.review.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "products")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @Lob
    private String description;
    private String category;
    private Double avg = 0.0;
    private Double price;

    @OneToMany
            (
                    targetEntity = ProductImage.class,
                    cascade = CascadeType.ALL,
                    orphanRemoval = true,
                    fetch = FetchType.EAGER
            )

    @JoinColumn(name = "product_id")
    private List<ProductImage> images;


    @OneToMany
            (
                    targetEntity = Review.class,
                    cascade = CascadeType.ALL,
                    orphanRemoval = true,
                    fetch = FetchType.EAGER
            )
    @JoinColumn(name = "product_id", referencedColumnName = "id")
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

    @ManyToMany
            (
                    targetEntity = ProductColors.class,
                    fetch = FetchType.EAGER,
                    cascade = CascadeType.ALL
            )
    @JoinTable
            (
                    name = "product_colors",
                    joinColumns = @JoinColumn(name = "product_id", referencedColumnName = "id"),
                    inverseJoinColumns = @JoinColumn(name = "color_id", referencedColumnName = "id")
            )
    private Set<ProductColors> colors;

    public Product(long id) {
        this.id = id;
    }

    public Product(String name, String description, String category, Double price) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
    }

    public void addReview(Review review) {
        reviews.add(review);
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", avg=" + avg +
                ", price=" + price +
                ", images=" + images +
                ", reviews=" + reviews +
                ", features=" + features +
                ", colors=" + colors +
                '}';
    }
}
