package com.nutritrack.javaspring.messagescontroller;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;


@RunWith(SpringRunner.class)
@WebMvcTest
public class MessagesControllerTest {

  @Autowired
  private MockMvc mvc;

  @Test
  public void getAllConversations() throws Exception {
  }

  @Test
  public void getMessagesByConversationId() throws Exception {
  }

  @Test
  public void postConversation() throws Exception {
  }

  @Test
  public void postMessagesByConversationId() throws Exception {
  }
}