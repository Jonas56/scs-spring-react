package com.scs.nemo.review;

import com.scs.nemo.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "reviews")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title ;
    private String comment ;
    private LocalDate date;
    private Integer rating=0 ;
    private Integer isHelpful=0 ;

    @ElementCollection
    private Set<String> comments ;

    @ManyToOne(
            targetEntity = User.class,
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL
    )
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

}
