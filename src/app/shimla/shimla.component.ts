import { Component } from '@angular/core';

@Component({
  selector: 'app-shimla',
  templateUrl: './shimla.component.html',
  styleUrls: ['./shimla.component.css']
})
export class ShimlaComponent {

  selectedSubMenu: string = "tourPlan"

  showTourPlan(){
    this.selectedSubMenu = "tourPlan"
  }

  showInformation(){
    this.selectedSubMenu = "tourInformation"
  }
}
