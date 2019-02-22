package com.nutritrack.javaspring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UsersController {

  @GetMapping("/{user_id}")
  public void getAllClients() {};

  @GetMapping("/pro/{user_id}")
  public void getAllAllies() {};
}
