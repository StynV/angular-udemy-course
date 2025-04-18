import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Appointment } from '../models/appointment';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})

export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = ""
  newAppointmentDate: Date = new Date()
  
  appointments: Appointment[] = []
 
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedAppointments = localStorage.getItem("appointments")
      this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
    }
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      const newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment)

      this.newAppointmentTitle = ""
      this.newAppointmentDate = new Date()

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }
}
