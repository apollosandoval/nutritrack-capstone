package com.nutritrack.javaspring.repository;

import com.nutritrack.javaspring.userscontroller.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  User findByUserId(Long id);
}
