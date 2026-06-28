package com.example.book_management_system.controller;

import com.example.book_management_system.dto.BookDTO;
import com.example.book_management_system.entity.Book;
import com.example.book_management_system.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/books")
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    //CREATE
    @PostMapping
    public Book addBook(@RequestBody BookDTO bookDTO) {
        return bookService.createBook(bookDTO);
    }

    //ReadAll
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    //Read by Id using query Parameter
    //Get/books/book?id=1

    @GetMapping(params = "id")
    public Book getBookById(@RequestParam long id) {
        return bookService.getBookById(id);
    }

    //Update
    @PutMapping
    public Book updateBook(@RequestParam Long id ,@RequestBody BookDTO bookDTO) {
        return bookService.updateBook(id, bookDTO);
    }

    //Delete
    @DeleteMapping
    public String deleteBookById(@RequestParam long id) {
        return bookService.deleteBook(id);
    }


}
