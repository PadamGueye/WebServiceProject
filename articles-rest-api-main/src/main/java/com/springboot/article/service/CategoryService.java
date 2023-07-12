package com.springboot.article.service;

import com.springboot.article.payload.CategoryDto;

import java.util.List;

public interface  CategoryService {
    CategoryDto createCategory(CategoryDto categoryDto);
    List<CategoryDto> getAllCategories();
    CategoryDto getCategoryById(long id);
    CategoryDto updateCategoryById(CategoryDto categoryDto, long id);
    void deleteCategoryById(long id);

}
