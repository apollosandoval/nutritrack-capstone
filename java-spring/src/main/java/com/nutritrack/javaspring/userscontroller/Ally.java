package com.nutritrack.javaspring.userscontroller;

public class Ally {

  private final Integer id;
  private final Integer professionalId;
  private final Integer clientId;

  public Ally(Integer id, Integer professionalId, Integer clientId) {
    this.id = id;
    this.professionalId = professionalId;
    this.clientId = clientId;
  }

  public Integer getId() {
    return id;
  }

  public Integer getProfessionalId() {
    return professionalId;
  }

  public Integer getClientId() {
    return clientId;
  }

}
