package com.springboot.article.service.impl;

import com.springboot.article.entity.Category;
import com.springboot.article.exception.ResourceNotFoundException;
import com.springboot.article.payload.CategoryDto;
import com.springboot.article.repository.CategoryRepository;
import com.springboot.article.service.CategoryService;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceimpl implements CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryServiceimpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public CategoryDto createCategory(CategoryDto categoryDto) {
        Category category =  mapToEntity(categoryDto);
        Category newCategory = categoryRepository.save(category);
        CategoryDto categoryResponse =  mapToDto(newCategory);

        return categoryResponse;
    }

    @Override
    public List<CategoryDto> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();
        return  categories.stream().map(category->mapToDto(category)).collect(Collectors.toList());
    }



    private CategoryDto mapToDto(Category category){
        CategoryDto categoryDto = new CategoryDto();
        categoryDto.setWording(category.getWording());


        return  categoryDto;
    }

    private Category mapToEntity(CategoryDto categoryDto){
        Category category = new Category();
        category.setWording(categoryDto.getWording());

        return category;
    }

    @Override
    public CategoryDto getCategoryById(long id) {
        Category category = categoryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Category","id",id));
        return mapToDto(category);
    }

    @Override
    public CategoryDto updateCategoryById(CategoryDto categoryDto, long id) {
        Category category = categoryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Category","id",id));
        category.setWording(categoryDto.getWording());


        Category updateCategory = categoryRepository.save(category);

        return mapToDto(updateCategory);
    }

    @Override
    public void deleteCategoryById(long id) {
        Category category = categoryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Category","id",id));
        categoryRepository.delete(category);
    }

}
