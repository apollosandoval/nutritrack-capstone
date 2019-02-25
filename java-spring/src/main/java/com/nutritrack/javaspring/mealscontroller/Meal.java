package com.nutritrack.javaspring.mealscontroller;

import java.util.Date;


public class Meal {

  private final Integer id;
  private final String meal;
  private final Integer calories;
  private final Integer fat;
  private final Integer protein;
  private final Integer carbs;
  private final Date date;
  private final Integer userId;

  public Meal(Integer id, String meal, Integer calories, Integer fat, Integer protein, Integer carbs, Date date, Integer userId) {
    this.id = id;
    this.meal = meal;
    this.calories = calories;
    this.fat = fat;
    this.protein = protein;
    this.carbs = carbs;
    this.date = date;
    this.userId = userId;
  }

  public Integer getId() {
    return id;
  }

  public String getMeal() {
    return meal;
  }

  public Integer getCalories() {
    return calories;
  }

  public Integer getFat() {
    return fat;
  }

  public Integer getProtein() {
    return protein;
  }

  public Integer getCarbs() {
    return carbs;
  }

  public Date getDate() {
    return date;
  }

  public Integer getUserId() {
    return userId;
  }

}
