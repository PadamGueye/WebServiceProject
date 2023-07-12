package com.springboot.article.repository;

import com.springboot.article.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CategoryRepository extends JpaRepository<Category , Long> {

}
