package com.scs.nemo.config;

import com.scs.nemo.auth.JwtAuthenticationFilter;
import com.scs.nemo.auth.JwtVerifier;
import com.scs.nemo.auth.UserAuthenticationServiceImp;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final UserAuthenticationServiceImp userAuthenticationService;

    public SecurityConfiguration(UserAuthenticationServiceImp userAuthenticationService) {
        this.userAuthenticationService = userAuthenticationService;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userAuthenticationService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager());
        jwtAuthenticationFilter.setFilterProcessesUrl("/api/v1/login");

        http
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests().antMatchers(HttpMethod.GET, "/api/v1/products/*").permitAll()
                .and()
                .authorizeRequests().antMatchers(HttpMethod.GET, "/api/v1/products").permitAll()
                .and()
                .authorizeRequests().antMatchers(HttpMethod.GET, "/swagger-ui/**").permitAll()
                .and()
                .authorizeRequests().antMatchers(HttpMethod.GET, "/v3/api-docs/**").permitAll()
                .and()
                .authorizeRequests().antMatchers(HttpMethod.POST, "/api/v1/register").permitAll()
                .and()
                .authorizeRequests().antMatchers(HttpMethod.POST, "/api/v1/login").permitAll()
                .and()
                .authorizeRequests().antMatchers(HttpMethod.GET, "/api/v1/downloadFile/*").permitAll()
                .and()
                .authorizeRequests().antMatchers(HttpMethod.GET, "/api/v1/downloadFile1/*").permitAll()
                .and()
                .addFilter(jwtAuthenticationFilter)
                .addFilterAfter(new JwtVerifier(), JwtAuthenticationFilter.class)
                .authorizeRequests().anyRequest().authenticated();
    }

    @Bean
    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Bean
    PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }
}
