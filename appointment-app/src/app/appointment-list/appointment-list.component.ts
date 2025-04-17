import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})

export class AppointmentListComponent {

  newAppointmentTitle: string = ""
  newAppointmentDate: Date = new Date()
  
  appointments: Appointment[] = []

  addAppointment() {
    alert(this.newAppointmentTitle + "" + this.newAppointmentDate)
  }

}
