package com.springboot.article.payload;

import com.springboot.article.entity.Category;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ArticleDto {
    private Long id;
    private String title;
    private String content;
}
