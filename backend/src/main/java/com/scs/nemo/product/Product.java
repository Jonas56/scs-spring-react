package com.scs.nemo.product;

import com.scs.nemo.comment.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.awt.*;
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
    @Column(name = "productId")
    private long id;
    private String name;
    private int rating;
    private String description;
    private String category;

    @OneToMany
    (
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.EAGER
    )
    @JoinColumn(name = "productId")
    private Set<ProductImage> images;

    @OneToMany
    (
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.EAGER
    )
    @JoinColumn(name = "productId")
    private Set<Comment> comments;

    @ManyToMany(targetEntity = ProductFeature.class, fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "product_features",
    joinColumns = @JoinColumn(name = "productId", referencedColumnName = "productId"),
            inverseJoinColumns = @JoinColumn(name = "featureId", referencedColumnName = "featureId"))
    private Set<ProductFeature> features;
}
