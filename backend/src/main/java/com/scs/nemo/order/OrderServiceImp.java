package com.scs.nemo.order;

import com.scs.nemo.auth.JwtUtil;
import com.scs.nemo.product.Product;
import com.scs.nemo.product.ProductRepository;
import com.scs.nemo.user.User;
import com.scs.nemo.user.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class OrderServiceImp implements IOrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final ProductRepository productRepository;

    public OrderServiceImp(OrderRepository orderRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }


    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrder(Long orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(
                        () -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                "Order with id : " + orderId + " not found!"
                        )
                );
    }

    public Order getOrderDetails(Long orderId) {
        return orderRepository.findById(orderId)
                .orElseThrow(
                        () -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                                "Order with id : " + orderId + " not found!"
                        )
                );
    }

    public Order placeOrder(Order order, HttpServletRequest request) {
        // Extract product id from order details and get product from product repository by id and set it to order
        for (int i = 0; i < order.getOrderDetails().size(); i++) {
            OrderDetails orderDetail = order.getOrderDetails().get(i);
            Product product = productRepository.findById(orderDetail.getProduct().getId()).orElseThrow(
                    () -> new ResponseStatusException(HttpStatus.BAD_REQUEST,
                            "Product with id : " + orderDetail.getProduct().getId() + " not found!"
                    )
            );
            orderDetail.setProduct(product);
            order.getOrderDetails().set(i, orderDetail);
        }
        order.setUser(this.getUserFromRequest(request));
        System.out.println("Order placed by " + order.getUser().getUsername());
        return orderRepository.save(order);
    }

    public Order updateOrder(Long orderId, Order order, HttpServletRequest request) {
        order.setUser(this.getUserFromRequest(request));
        return orderRepository.save(order);
    }

    public void cancelOrder(Long orderId) {
        orderRepository.deleteById(orderId);
    }

    public User getUserFromRequest(HttpServletRequest request) {
        String username = JwtUtil.extractUsernameFromRequest(request);
        return userRepository.findByUsernameOrEmail(username, username);
    }
}
