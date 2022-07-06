package com.scs.nemo.user;

import com.scs.nemo.fileUpload.DatabaseFile;
import com.scs.nemo.review.Review;
import com.scs.nemo.order.Order;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @Column(unique = true)
    private String username;
    @Column(unique = true)
    private String email;
    private String password;
    private String userAvatar;

    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Review> reviews;

    @OneToMany(
            targetEntity = Order.class,
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private List<Order> orders;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_avatar_id")
    private DatabaseFile userAvatarFile;

}

