package com.example.myapp.service;

import java.util.List;
import javax.jws.*;

import com.example.myapp.modele.User;
import com.example.myapp.repository.UserRepository;

@WebService(serviceName = "userws", targetNamespace = "http://techtip.com/jaxws/sample")
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserService() {
        this.userRepository = new UserRepository();
    }

    @WebMethod
    public List<User> getAllUsers(@WebParam(name = "token") String token) {
        if (isAdmin(token)) {
            return userRepository.findAll();
        } else {
            throw new SecurityException("Acces non autorisé : vous n'êtes pas admin");
        }
    }

    @WebMethod
    public User getUserById(@WebParam(name = "userId") int userId, @WebParam(name = "token") String token) {
        if (isAdmin(token) || isEditor(token)) {
            User user = userRepository.findById(userId);
            if (user != null) {
                return user;
            } else {
                throw new IllegalArgumentException("User not found.");
            }
        } else {
            throw new SecurityException("Access denied. Admin or editor rights required.");
        }
    }

    @WebMethod
    public User createUser(@WebParam(name = "user") User user, @WebParam(name = "token") String token) {
        if (isAdmin(token)) {
            userRepository.save(user);
            return user;
        } else {
            throw new SecurityException("Acces non autorisé : vous n'êtes pas admin");
        }
    }

    @WebMethod
    public void updateUser(@WebParam(name = "user") User user, @WebParam(name = "token") String token) {
        if (isAdmin(token)) {
            userRepository.update(user);
        } else {
            throw new SecurityException("Acces non autorisé : vous n'êtes pas admin");
        }
    }

    @WebMethod
    public void deleteUser(@WebParam(name = "userId") int userId, @WebParam(name = "token") String token) {
        if (isAdmin(token)) {
            userRepository.delete(userId);
        } else {
            throw new SecurityException("Acces non autorisé : vous n'êtes pas admin");
        }
    }

    @WebMethod
    public String authenticate(@WebParam(name = "username") String username, @WebParam(name = "password") String password) {
        User user = userRepository.findByUsernameAndPassword(username, password);
        
        if (user != null) {
            if (user.getUserRole().equals("ADMIN")) {
                return "admin_token";
            } else if (user.getUserRole().equals("EDITOR")) {
                return "editor_token";
            }
        }
        return "Invalid username or password.";
    }

    private boolean isAdmin(String token) {
        return "admin_token".equals(token);
    }

    private boolean isEditor(String token) {
        return "editor_token".equals(token);
    }

}
