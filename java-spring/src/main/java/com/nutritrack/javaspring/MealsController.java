package com.nutritrack.javaspring;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/meals")
public class MealsController {

  @GetMapping("/{user_id}/{date}")
  public void getMealsByDate() {};

  @GetMapping("/history/week/{user_id}/{date}")
  public void getMealsByWeek() {};

  @GetMapping("/history/month/{user_id}/{date}")

  @PostMapping("/in/{user_id}")
  public void postDineIn() {};

  @PostMapping("/out/{user_id}")
  public void postEatOut() {};

  @DeleteMapping("/{meal_id}")
  public void deleteMeal() {};

}
