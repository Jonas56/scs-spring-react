package com.scs.nemo.config;

import com.google.gson.Gson;
import com.scs.nemo.product.Product;
import org.apache.tomcat.util.json.JSONParser;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.util.List;
import java.util.stream.Collectors;

public class ProductsData {

    public static List<Product> getProducts() {
        InputStream input = ProductsData.class.getResourceAsStream("/products.json");
        String result = new BufferedReader(new InputStreamReader(input))
                .lines().parallel().collect(Collectors.joining("\n"));
        Gson gson = new Gson();
        Type listType = new TypeToken<List<Product>>() {
        }.getType();
        List<Product> products = gson.fromJson(result , listType);
        return products;
    }
}
