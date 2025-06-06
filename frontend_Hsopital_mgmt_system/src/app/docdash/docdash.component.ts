import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocautService } from '../docaut.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  constructor(private patientService:PatientService,private router:Router, private docaut:DocautService){}
  
  patients:Patient[]=[];

  ngOnInit():void
  {
     this.getPatients();
  }
  
  getPatients()
  {
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }

  update(id:number)
  {
    this.router.navigate(['update-patient',id])
  }

  delete(id:number)
  {
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }

  logout()
  {
    this.docaut.logout();
    this.router.navigate(['home'])
  }
}
