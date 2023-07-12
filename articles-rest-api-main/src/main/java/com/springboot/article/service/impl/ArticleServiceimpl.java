package com.springboot.article.service.impl;

import com.springboot.article.entity.Article;
import com.springboot.article.entity.Category;
import com.springboot.article.exception.ResourceNotFoundException;
import com.springboot.article.payload.ArticleDto;
import com.springboot.article.payload.ArticleResponse;
import com.springboot.article.repository.ArticleRepository;
import com.springboot.article.repository.CategoryRepository;
import com.springboot.article.service.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleServiceimpl implements ArticleService {

    private ArticleRepository articleRepository;
    private CategoryRepository categoryRepository;

    public ArticleServiceimpl(ArticleRepository articleRepository, CategoryRepository categoryRepository) {
        this.articleRepository = articleRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public ArticleDto createArticle(long categoryId, ArticleDto articleDto) {
        Article article =  mapToEntity(articleDto);
        Category category = categoryRepository.findById(categoryId).orElseThrow(
                () -> new ResourceNotFoundException("Category","id", categoryId));

        article.setCategory(category);
        Article newArticle = articleRepository.save(article);

        return mapToDto(newArticle) ;
    }

    @Override
    public List<ArticleDto> getArticlesByCategoryId(long categoryId) {
        List<Article> articles = articleRepository.findByCategoryId(categoryId);
        return articles.stream().map(article -> mapToDto(article)).collect(Collectors.toList());
    }

    @Override
    public ArticleResponse  getAllArticles(int pageNo, int pageSize) {

        Pageable pageable = PageRequest.of(pageNo, pageSize);

        Page<Article> articles = articleRepository.findAll(pageable);

        List<Article>  listOfArticles = articles.getContent();
        List<ArticleDto> content =  listOfArticles.stream().map(article->mapToDto(article)).collect(Collectors.toList());
        ArticleResponse articleResponse = new ArticleResponse();
        articleResponse.setContent(content);
        articleResponse.setPageNo(articles.getNumber());
        articleResponse.setPageSize(articleResponse.getPageSize());
        articleResponse.setTotalElements(articles.getTotalElements());
        articleResponse.setTotalPages(articles.getTotalPages());
        articleResponse.setLast(articles.isLast());
        return articleResponse;
    }



    private ArticleDto mapToDto(Article article){
        ArticleDto articleDto = new ArticleDto();
        articleDto.setTitle(article.getTitle());
        articleDto.setContent(article.getContent());
        return  articleDto;
    }

    private Article mapToEntity(ArticleDto articleDto){
        Article article = new Article();
        article.setTitle(articleDto.getTitle());
        article.setContent(articleDto.getContent());
        return article;
    }

    @Override
    public ArticleDto getArticleById(long id) {
         Article article = articleRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Article","id",id));
        return mapToDto(article);
    }

    @Override
    public ArticleDto updateArticleById(ArticleDto articleDto, long id) {
        Article article = articleRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Article","id",id));
        article.setTitle(articleDto.getTitle());
        article.setContent(articleDto.getContent());

        Article updateArticle = articleRepository.save(article);

        return mapToDto(updateArticle);
    }

    @Override
    public void deleteArticleById(long id) {
        Article article = articleRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Article","id",id));
        articleRepository.delete(article);
    }

}
