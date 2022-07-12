package com.scs.nemo.product;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "product_images")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ProductImage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Lob
    private String path;

}