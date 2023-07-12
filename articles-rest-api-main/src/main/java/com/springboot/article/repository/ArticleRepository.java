package com.springboot.article.repository;

import com.springboot.article.entity.Article;
import com.springboot.article.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ArticleRepository  extends JpaRepository<Article, Long>{
    List<Article> findByCategoryId (long id );
}
