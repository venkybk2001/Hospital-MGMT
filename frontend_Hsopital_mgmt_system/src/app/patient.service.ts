import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://13.201.104.243:8080/Hospital/api/v1/patients"

  getPatientList():Observable<Patient[]>{

    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
  }

  delete(id:number):Observable<object>{

    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  createPatient(patient:Patient):Observable<Patient>
  {
    return this.httpClient.post<Patient>(`${this.baseUrl}`,patient);
  }

  getPatinetById(id:number):Observable<Patient>
  {
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  updatePatinet(id:number,patient:Patient):Observable<object>
  {
     return this.httpClient.put<Patient>(`${this.baseUrl}/${id}`,patient);
  }

}
