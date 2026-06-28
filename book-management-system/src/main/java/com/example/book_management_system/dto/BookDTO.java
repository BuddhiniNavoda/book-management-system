package com.example.book_management_system.dto;

public class BookDTO {
    private String title;
    private String author;
    private double price;
    private String category ;

    public BookDTO(){

    }

    public BookDTO(String title, String author, double price, String  category) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

}
