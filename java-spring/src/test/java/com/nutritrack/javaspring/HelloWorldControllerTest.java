package com.nutritrack.javaspring;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import javax.servlet.ServletContext;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest
public class HelloWorldControllerTest {

  @Autowired
  private MockMvc mvc;

  @Test
  public void helloWorldTest() throws Exception {
    RequestBuilder request = MockMvcRequestBuilders.get("/helloworld/");

    this.mvc.perform(request)
            .andExpect(status().isOk())
            .andExpect(content().string("Hello World!"));

  }
}