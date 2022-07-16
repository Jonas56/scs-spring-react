package com.scs.nemo.order;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.scs.nemo.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "orders")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private OrderStatus orderStatus;
    @Column(nullable = false)
    private String orderNumber;
    private Date orderDate;
    private String orderShipping;
    private Long orderTotal;
    @OneToMany(
            targetEntity = OrderDetails.class,
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    private List<OrderDetails> orderDetails;

    @ManyToOne(
            targetEntity = User.class,
            fetch = FetchType.EAGER,
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "id"
    )
    private User user;



    @PrePersist
    public void setOrderDate() {
        this.orderDate = new Date();
        this.orderNumber = "" + UUID.randomUUID();
        this.orderStatus = OrderStatus.PLACED;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderStatus=" + orderStatus +
                ", orderNumber='" + orderNumber + '\'' +
                ", orderDate=" + orderDate +
                ", orderShipping='" + orderShipping + '\'' +
                ", orderTotal=" + orderTotal +
                ", orderDetails=" + orderDetails +
                '}';
    }
}
