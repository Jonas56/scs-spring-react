package com.scs.nemo.product;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "colors")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ProductColors {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String className;
    private String selectedClass;
}
