package com.nutritrack.javaspring.messagescontroller;

public class Message {

  private final Integer id;
  private final Integer conversationId;
  private final Integer fromId;
  private final Integer toId;
  private final String content;

  public Message(Integer id, Integer conversationId, Integer fromId, Integer toId, String content) {
    this.id = id;
    this.conversationId = conversationId;
    this.fromId = fromId;
    this.toId = toId;
    this.content = content;
  }

  public Integer getId() {
    return id;
  }

  public Integer getConversationId() {
    return conversationId;
  }

  public Integer getFromId() {
    return fromId;
  }

  public Integer getToId() {
    return toId;
  }

  public String getContent() {
    return content;
  }
}
