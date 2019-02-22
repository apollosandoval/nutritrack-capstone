package com.nutritrack.javaspring;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messages")
public class MessagesController {

  @GetMapping("/inbox/{user_id}")
  public void getAllConversations() {};

  @GetMapping("/inbox/{user_id/{conversation_id}")
  public void getMessagesByConversationId() {};

  @PostMapping("/conversations")
  public void postConversation() {};

  @PostMapping("/{conversation_id}")
  public void postMessagesByConversationId() {};

}
