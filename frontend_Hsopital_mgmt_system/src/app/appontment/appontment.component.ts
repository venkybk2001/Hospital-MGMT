import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appontment',
  templateUrl: './appontment.component.html',
  styleUrl: './appontment.component.css'
})
export class AppontmentComponent {

  appointments:Appointment[]=[];
  constructor(private appointmentService:AppointmentService){}

  ngOnInit():void{

    this.getAppointments();
  }
  getAppointments(){
    this.appointmentService.getAllAppointmets().subscribe(data=>{
    
      this.appointments=data;

    })
  }

  delete(id:number)
  {
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
  }
}
