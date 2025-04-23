import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book.model'

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  newBookTitle: string = ""
  newBookAuthor: string = ""

  books: Book[] = []

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
    }
  }
}
