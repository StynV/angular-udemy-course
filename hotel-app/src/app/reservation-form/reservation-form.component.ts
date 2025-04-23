import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})

export class ReservationFormComponent {
  reservationForm: FormGroup = new FormGroup({})

  onSubmit() {

  }
}
