import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book.model'

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})

export class AppointmentListComponent implements OnInit {
  newBookTitle: string = ""
  newBookAuthor: string = ""

  books: Book[] = []

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedBooks = localStorage.getItem("books")
      this.books = savedBooks ? JSON.parse(savedBooks) : []
    }
  }

  addBook() {
    if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
      const newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      }

      this.books.push(newBook)

      this.newBookTitle = ""
      this.newBookAuthor = ""

      localStorage.setItem("books", JSON.stringify(this.books))
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))
  }
}
