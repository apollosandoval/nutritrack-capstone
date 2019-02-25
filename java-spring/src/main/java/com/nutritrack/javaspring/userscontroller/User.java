package com.nutritrack.javaspring.userscontroller;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;


public class User {

  @Id
  private Long id;
  private final String name;
  private final String email;
  private final String institution;
  private final boolean pro;
  private final String password;

  @JsonCreator
  public User(@JsonProperty("name") String name,
              @JsonProperty("email") String email,
              @JsonProperty("institution") String institution,
              @JsonProperty("pro") boolean pro,
              @JsonProperty("password") String password) {
    this.name = name;
    this.email = email;
    this.institution = institution;
    this.pro = pro;
    this.password = password;
  }

  public String getName() {
    return name;
  }

  public String getEmail() {
    return email;
  }

  public String getInstitution() {
    return institution;
  }

  public boolean isPro() {
    return pro;
  }

  public String getPassword() {
    return password;
  }

  public void setId(Long id) { this.id = id; }

}
