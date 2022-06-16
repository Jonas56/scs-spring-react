package com.scs.nemo.product;


import lombok.*;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "features")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductFeature
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
}
