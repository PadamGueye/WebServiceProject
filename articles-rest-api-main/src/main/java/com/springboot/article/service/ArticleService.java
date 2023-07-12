package com.springboot.article.service;

import com.springboot.article.payload.ArticleDto;
import com.springboot.article.payload.ArticleResponse;

import java.util.List;

public interface  ArticleService {
     ArticleDto createArticle(long categoryId, ArticleDto articleDto);
     List<ArticleDto> getArticlesByCategoryId(long categoryId);
     ArticleResponse getAllArticles(int pageNo, int pageSize);
     ArticleDto getArticleById(long id);
     ArticleDto updateArticleById(ArticleDto articleDto, long id);
     void deleteArticleById(long id);

}
