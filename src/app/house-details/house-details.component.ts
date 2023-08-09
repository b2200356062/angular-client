import { Component, Input, OnInit } from '@angular/core';
import { House } from '../house';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../house.service';
import { FirstPageComponent } from '../first-page/first-page.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  selectedHouse: House;
  
  constructor(private route: ActivatedRoute, private houseService: HouseService) { } // urldeki parametreleri alır
  
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const houseID = Number(routeParams.get('id'));
    this.houseService.getHouse(houseID).subscribe( // servisten metod kullanımı subscribe ile oluyo!!
      (response: House) => {    // response 
        this.selectedHouse = response; // ve atama
      }
    )
  }
  
}
