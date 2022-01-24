import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  q: string = '';
  weather: any;
  // searchSubject = new Subject();
  constructor() { }

  ngOnInit(): void {
  // this.searchSubject
  //   .pipe(debounceTime(1000), distinctUntilChanged())
    
  //   .subscribe(zip => {
  //     console.log(this.zip);

      // this.weather.createAPIObservable(q).subscribe(response => {
      //   console.log(response);

      //   this.weather = response;

      }
  }