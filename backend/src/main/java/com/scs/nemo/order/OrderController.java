package com.scs.nemo.order;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
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
        return modelMapper.map(orderService.getAllOrders(), List.class);
    }

    @GetMapping("/{orderId}")
    public OrderResponseDto getOrder(@PathVariable Long orderId) {
        return modelMapper.map(orderService.getOrder(orderId), OrderResponseDto.class);
    }

    @PostMapping()
    public OrderResponseDto placeOrder(@RequestBody @Valid OrderRequestDto orderRequestDto, HttpServletRequest request) {
        return modelMapper.map(orderService.placeOrder(modelMapper.map(orderRequestDto, Order.class), request), OrderResponseDto.class);
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
