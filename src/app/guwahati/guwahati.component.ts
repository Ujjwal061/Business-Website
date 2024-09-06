import { Component } from '@angular/core';

@Component({
  selector: 'app-guwahati',
  templateUrl: './guwahati.component.html',
  styleUrls: ['./guwahati.component.css']
})
export class GuwahatiComponent {

  selectedSubMenu: string = "tourPlan"

  showTourPlan(){
    this.selectedSubMenu = "tourPlan"
  }

  showInformation(){
    this.selectedSubMenu = "tourInformation"
  }
}
