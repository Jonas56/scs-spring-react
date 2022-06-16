package com.scs.nemo.comment;

import com.scs.nemo.product.ProductImage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "comments")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Comment
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String text;
    private LocalDate date;
    private Integer rating;
    private Integer likes;

    @OneToMany
    (
        targetEntity = Comment.class,
        cascade = CascadeType.ALL,
        orphanRemoval = true,
        fetch = FetchType.EAGER
    )
    @JoinColumn
    (
        name = "comment_id",
        referencedColumnName = "id"
    )
    private Set<Comment> replies;
}
