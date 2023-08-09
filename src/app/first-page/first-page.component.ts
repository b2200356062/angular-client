import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { House } from '../house';
import { HouseDetailsComponent } from '../house-details/house-details.component';
import { HouseService } from '../house.service';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {
  public houses: House[];
  title: "Real Estate";
  searchText: any;
  filteredLocationList: House[] = [];
  house: House;
  constructor(private houseService: HouseService) {
  }

  ngOnInit(): void {
    this.getHouses();
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.houses;
    }
  
    this.filteredLocationList = this.houses.filter(
      houses => houses?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  getHouses(): void {
    this.houseService.getHouses().subscribe(
      (response: House[]) => {
        this.houses = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
