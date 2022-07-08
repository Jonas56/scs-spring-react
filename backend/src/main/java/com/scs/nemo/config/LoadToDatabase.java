package com.scs.nemo.config;

import com.scs.nemo.product.ProductRepository;
import com.scs.nemo.user.IUserService;
import com.scs.nemo.user.User;
import com.scs.nemo.user.dto.UserRequestDto;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
public class LoadToDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadToDatabase.class);
    private final UserRequestDto userRequestDto = UserRequestDto.build(
            "Jonas Tesla",
            "Jonas56",
            "jonas@tesla.com",
            "Jonas.@123",
            "https://avatars.dicebear.com/api/male/jonas56.svg"
    );


    @Bean
    @Profile("!prod")
    CommandLineRunner initDatabase(IUserService userService, ModelMapper modelMapper, ProductRepository productRepository) {
        return args -> {
            log.info("Preloading " + userService.register(modelMapper.map(userRequestDto, User.class)));
            productRepository.saveAll(ProductsData.getProducts());
        };
    }
}
