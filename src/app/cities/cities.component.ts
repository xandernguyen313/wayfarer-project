import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  city: any;
  cityIndex: string = '';

// let's make the URL routes available to class 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.cityIndex = params.get('id') || '';

      this.city = CITIES.find(city => {
  
        return city.id === parseInt(this.cityIndex);
        


      })

    })
  
  
  }

}


// this.route.queryParams.subscribe(params => {
//    this.name = params['name'];
//     });
// }
// }