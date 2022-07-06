package com.scs.nemo.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import org.apache.logging.log4j.util.Strings;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class JwtVerifier extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull FilterChain filterChain) throws ServletException, IOException {
        if (request.getRequestURI().equals("/api/v1/register") ||
                ((request.getRequestURI().matches("/api/v1/products/.*") && request.getMethod().equalsIgnoreCase("GET")) ||
                        (request.getRequestURI().equals("/api/v1/products") && request.getMethod().equalsIgnoreCase("GET")))
                || (request.getRequestURI().equals("/api/v1/downloadFile/{fileName:.+}") && request.getMethod().equalsIgnoreCase("GET"))
                || (request.getRequestURI().matches("/api/v1/downloadFile/.*") && request.getMethod().equalsIgnoreCase("GET"))
                || (request.getRequestURI().equals("/api/v1/downloadFile1/{fileName:.+}") && request.getMethod().equalsIgnoreCase("GET"))
                || request.getRequestURI().contains("/swagger-ui")
                || request.getRequestURI().contains("/v3/api-docs")) {
            filterChain.doFilter(request, response);
            return;
        }
        String authorization = request.getHeader(JwtUtil.AUTH_HEADER);
        if (Strings.isEmpty(authorization) || !authorization.startsWith("Bearer")) {
            response.setContentType("application/json");
            response.setStatus(403);
            Map<String, ?> errorResponse = new HashMap<>() {{
                put("message", "Access Denied");
                put("path", request.getServletPath());
                put("status", 403);
            }};
            ObjectMapper mapper = new ObjectMapper();
            mapper.writeValue(response.getOutputStream(), errorResponse);
            return;
        }
        try {
            Jws<Claims> claimsJWTs = JwtUtil.extractClaimsFromToken(request);
            Claims body = claimsJWTs.getBody();
            String username = body.getSubject();
            Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, new ArrayList<>());
            SecurityContextHolder.getContext().setAuthentication(authentication);

            filterChain.doFilter(request, response);
        } catch (Exception exception) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", exception.getLocalizedMessage());
            response.setContentType("application/json");
            response.setStatus(403);
            ObjectMapper mapper = new ObjectMapper();
            mapper.writeValue(response.getOutputStream(), errorResponse);
        }

    }
}