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

  get sortByLastModified() {
    return this.city.posts.sort((a: any, b: any) => {
      return <any>new Date(b.lastModified) - <any>new Date(a.lastModified);
    })
  }

}

