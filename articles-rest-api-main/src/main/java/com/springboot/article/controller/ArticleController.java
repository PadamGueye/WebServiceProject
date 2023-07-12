package com.springboot.article.controller;

import com.springboot.article.payload.ArticleDto;
import com.springboot.article.payload.ArticleResponse;
import com.springboot.article.service.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class ArticleController {

    private ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PostMapping("/categories/{categoryId}/articles")
    public ResponseEntity<ArticleDto> createArticle(@PathVariable(value = "categoryId") long categoryId,
                                                    @RequestBody  ArticleDto articleDto)
    {
        return  new ResponseEntity<>(articleService.createArticle(categoryId,articleDto), HttpStatus.CREATED);
    }

    @GetMapping("/categories/{categoryId}/articles")
    public List<ArticleDto> getArticlesByCategoryId(@PathVariable(value = "categoryId") long categoryId){
        return articleService.getArticlesByCategoryId(categoryId);
    }
    @GetMapping("/articles")
    public ArticleResponse getAllArticles(
            @RequestParam(value = "pageNo", defaultValue = "0", required = false) int pageNo,
            @RequestParam(value = "pageSize",defaultValue = "10", required = false) int pageSize
    ){
        return articleService.getAllArticles(pageNo,pageSize);
    }

    @GetMapping("/articles/{id}")
    ResponseEntity<ArticleDto> getArticleById(@PathVariable(name = "id") long id){
        return ResponseEntity.ok(articleService.getArticleById(id));
    }

    @PutMapping("/articles/{id}")
    public ResponseEntity<ArticleDto> updateArticleById(@RequestBody ArticleDto articleDto, @PathVariable(name="id") long id){

       ArticleDto articleResponse = articleService.updateArticleById(articleDto, id);

       return new ResponseEntity<>(articleResponse, HttpStatus.OK);
    }

    @DeleteMapping("/articles/{id}")
    public ResponseEntity<String> deleteArticleById(@PathVariable(name = "id") long id){
        articleService.deleteArticleById(id);

        return new ResponseEntity<>("Article entity deleted successfully.", HttpStatus.OK);
    }
}
