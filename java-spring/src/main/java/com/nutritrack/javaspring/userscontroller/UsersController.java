package com.nutritrack.javaspring.userscontroller;

import com.nutritrack.javaspring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UsersController {

  @Autowired()
  private UserRepository userRepository;

  @GetMapping("/clients/{user_id}")
  public void getAllClients() {};

  @GetMapping("/pro/{user_id}")
  public void getAllAllies() {};

  @GetMapping("/{user_id}")
  public User getUserByUserId(@RequestParam Long user_id) {
    return userRepository.findByUserId(user_id);
  }
}
