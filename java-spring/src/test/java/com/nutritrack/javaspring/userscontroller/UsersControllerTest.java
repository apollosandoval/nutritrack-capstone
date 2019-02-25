package com.nutritrack.javaspring.userscontroller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest
class UsersControllerTest {

  @Autowired
  private MockMvc mvc;

  @Test
  public void getAllClients() throws Exception {
  }

  @Test
  public void getAllAllies() throws Exception {
  }

  @Test
  public void findByUserIdTest() throws Exception {
    RequestBuilder request = MockMvcRequestBuilders.get("/users/1");

    this.mvc.perform(request)
            .andExpect(status().isOk());
  }
}