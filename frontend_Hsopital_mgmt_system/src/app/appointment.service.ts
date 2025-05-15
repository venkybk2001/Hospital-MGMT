import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://13.201.104.243:8080/Hospital/api/v2/appointments"

  getAllAppointmets():Observable<Appointment[]>{

    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }

  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.baseUrl}`,appointment);
  }

  deleteAppointment(id:number):Observable<object>
  {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  
}
