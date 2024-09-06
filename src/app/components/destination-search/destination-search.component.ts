import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination-search',
  templateUrl: './destination-search.component.html',
  styleUrls: ['./destination-search.component.css']
})
export class DestinationSearchComponent {

  constructor(private router: Router) {}

  selectedvalue?:string;

  onPackageSelect(event: Event): void {
    // const selectedValue = (event.target as HTMLSelectElement).value;

    this.selectedvalue = (event.target as HTMLSelectElement).value
    console.log(this.selectedvalue)

    
  }

  onSubmitSearch(){
    if (this.selectedvalue === "shimla" || this.selectedvalue === "guwahati") {
      this.router.navigate(['/' + this.selectedvalue]);
    }else{
      this.router.navigate(['home/'])
    }
  }


}
