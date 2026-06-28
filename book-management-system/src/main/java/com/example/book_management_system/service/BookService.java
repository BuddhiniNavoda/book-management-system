package com.example.book_management_system.service;

import com.example.book_management_system.dto.BookDTO;
import com.example.book_management_system.entity.Book;
import com.example.book_management_system.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepository;
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    //CREATE
    public Book createBook(BookDTO book){
        Book bookEntity = new Book();
        bookEntity.setTitle(book.getTitle());
        bookEntity.setAuthor(book.getAuthor());
        bookEntity.setPrice(book.getPrice());
        bookEntity.setCategory(book.getCategory());

        return bookRepository.save(bookEntity);
    }

    //READ ALL
    public List<Book> getAllBooks(){
        List<Book> books = bookRepository.findAll();
        return bookRepository.findAll();
    }

    //READ ALL
    public Book getBookById(Long id){
        return bookRepository.findById(id).orElse(null);
    }

    //UPDATE
    public Book updateBook(Long id , BookDTO bookDTO){
        Book bookEntity = bookRepository.findById(id).orElse(null);

        if(bookEntity != null){
            bookEntity.setTitle(bookDTO.getTitle());
            bookEntity.setAuthor(bookDTO.getAuthor());
            bookEntity.setPrice(bookDTO.getPrice());
            bookEntity.setCategory(bookDTO.getCategory());

            return bookRepository.save(bookEntity);
        }
        return null;
    }

    //DELETE

    public String deleteBook(Long id){
        bookRepository.deleteById(id);
        return "Book deleted successfully";
    }


}
