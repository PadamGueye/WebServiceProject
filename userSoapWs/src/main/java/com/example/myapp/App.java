package com.example.myapp;

import javax.xml.ws.Endpoint;

import com.example.myapp.repository.UserRepository;
import com.example.myapp.service.UserService;

public class App {
    public static void main(String[] args) throws Exception {
        String url = "http://localhost:8084/";
        UserRepository userRepository = new UserRepository();
        UserService userService = new UserService(userRepository);
        Endpoint.publish(url, userService);
        System.out.println(url);
    }
}

