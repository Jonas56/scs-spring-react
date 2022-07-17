package com.scs.nemo.order;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface IOrderService {

    List<Order> getAllOrders();

    Order getOrder(Long orderId);

    Order getOrderDetails(Long orderId);

    Order placeOrder(Order order, HttpServletRequest request);

    Order updateOrder(Long orderId, Order order, HttpServletRequest request);

    void cancelOrder(Long orderId);


}
