import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppontmentComponent } from './appontment/appontment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';
import { AdminauthguardService } from './adminauthguard.service';
import { DoctorauthgrardService } from './doctorauthgrard.service';

const routes: Routes = [
  {
    path:'admin',component:AdmindashComponent, canActivate:[AdminauthguardService]
  },
  {
    path:'appointmentlist',component:AppontmentComponent, canActivate:[AdminauthguardService]
  },
  {
    path:'create-appointment',component:CreateAppointmentComponent, canActivate:[AdminauthguardService]
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'docdash',component:DocdashComponent, canActivate:[DoctorauthgrardService]
  },
  {
    path:'create-patient',component:CreatePatientComponent, canActivate:[DoctorauthgrardService]
  },
  {
    path:'medicinelist',component:MedicinelistComponent, canActivate:[DoctorauthgrardService]
  },
  {
    path:'create-medicine',component:CreateMedicineComponent, canActivate:[DoctorauthgrardService]
  },
  {
    path:'update-patient/:id',component:UpdatePatientComponent, canActivate:[DoctorauthgrardService]
  },
  {
    path:'update-medicine/:id',component:UpdateMedicineComponent, canActivate:[DoctorauthgrardService]
  },
  {
    path:'doclogin',component:DocloginComponent
  },
  {
    path:'adlogin',component:AdloginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
