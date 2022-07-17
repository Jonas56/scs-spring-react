package com.scs.nemo.order;

import com.scs.nemo.order.dto.OrderRequestDto;
import com.scs.nemo.order.dto.OrderResponseDetailsDto;
import com.scs.nemo.order.dto.OrderResponseDto;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.lang.reflect.Type;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/orders", produces = "application/json")
public class OrderController {

    private final IOrderService orderService;
    private final ModelMapper modelMapper;

    public OrderController(IOrderService orderService, ModelMapper modelMapper) {
        this.orderService = orderService;
        this.modelMapper = modelMapper;
    }

    @GetMapping()
    public List<OrderResponseDto> getAllOrders() {
        Type listType = new TypeToken<List<OrderResponseDto>>() {}.getType(); // Get List<OrderResponseDto> type
        return modelMapper.map(orderService.getAllOrders(), listType); // Map List<Order> to List<OrderResponseDto>
    }

    @GetMapping("/{orderId}")
    public OrderResponseDto getOrder(@PathVariable Long orderId) {
        return modelMapper.map(orderService.getOrder(orderId), OrderResponseDto.class);
    }
    @GetMapping("/details/{orderId}")
    public OrderResponseDetailsDto getOrderDetails(@PathVariable Long orderId) {
        return modelMapper.map(orderService.getOrder(orderId), OrderResponseDetailsDto.class);
    }

    @PostMapping()
    public ResponseEntity<OrderResponseDto> placeOrder(@RequestBody @Valid OrderRequestDto orderRequestDto, HttpServletRequest request) {
        return new ResponseEntity<>(
                modelMapper.map(
                        orderService.placeOrder(modelMapper.map(orderRequestDto, Order.class), request),
                        OrderResponseDto.class
                ), HttpStatus.CREATED);
    }

    @PutMapping("/{orderId}")
    public ResponseEntity<OrderResponseDto> updateOrder(@PathVariable Long orderId, @RequestBody @Valid OrderRequestDto orderRequestDto, HttpServletRequest request) {
        return new ResponseEntity<>(
                modelMapper.map(
                        orderService.updateOrder(orderId, modelMapper.map(orderRequestDto, Order.class), request),
                        OrderResponseDto.class),
                HttpStatus.CREATED
        );
    }

    @DeleteMapping("/{orderId}")
    public void cancelOrder(@PathVariable Long orderId) {
        orderService.cancelOrder(orderId);
    }
}
