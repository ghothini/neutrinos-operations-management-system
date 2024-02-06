import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-domestic-travel',
  templateUrl: './domestic-travel.component.html',
  styleUrls: ['./domestic-travel.component.scss']
})
export class DomesticTravelComponent {
  employee: any;
  allEmployees: any;
  allDomesticTravels: any;
  domesticTravelFormData: any = {
    dateOfRequest: '',
    confirmedTravelDate: '',
    prefferedTravelTime: '',
    confirmedReturnDate: '',
    prefferedReturnTime: '',
    customerName: '',
    projectName: '',
    currensy: ''
  }
  employeeCredentialsFormData: any = {
    surname: 'Mokotelakoena',
    name: 'Thapelo',
    email: 'thapeloghothini@gmail.com',
    phoneNo: '072 714 8449',
    managerName: 'Goitsemang',
    managerEmail: 'goitse@neutrinos.com'
  }

  currensies: string[] = ['1 ZAR (South African Rand)','1 INR/ 0.22484 ZAR (Indian Rupee/South African Rand)'];

  constructor(private location: Location, private sharedService: SharedServiceService, private snackbar: MatSnackBar
    , private router: Router) {
      this.employee = this.sharedService.get('employee','session');
      this.allEmployees = this.sharedService.get('employees','local');
      this.allDomesticTravels = this.sharedService.get('domesticTravels','local');
     }
  goBack(): void {
    this.location.back();
    this.sharedService.updateOperationsShow();
  }

  submit(): void {
    const domesticTravel = {
      ...this.domesticTravelFormData,
      credentials: {
        ...this.employeeCredentialsFormData
      }
    }

    this.employee.operationsOperated.domesticTravels.push(domesticTravel);
    // Update session and local storage and domestic travels array
    this.sharedService.set('employee','session',this.employee);
    this.allEmployees.forEach((employee: any) => {
      if(employee.id === this.employee.id){
        employee.operationsOperated.domesticTravels.push(domesticTravel);
        this.sharedService.set('employees','local',this.allEmployees);
      }
    })
    this.allDomesticTravels.push(domesticTravel);
    this.allDomesticTravels[this.allDomesticTravels.length - 1] = {
      ...this.allDomesticTravels[this.allDomesticTravels.length - 1],
      id: this.employee.id
    }
    console.log(this.allDomesticTravels);
    this.sharedService.set('domesticTravels','local',this.allDomesticTravels);
    this.snackbar.open(`Domestic travel was requested successfully`, 'Ok', { duration: 3000 });
    this.sharedService.updateOperationsShow();
    this.location.back();
  }
}