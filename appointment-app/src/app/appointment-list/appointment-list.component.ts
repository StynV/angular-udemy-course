import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})

export class AppointmentListComponent {

  appointment: Appointment = {
    id: 0,
    title: 'First task',
    date: new Date()
  }

}
