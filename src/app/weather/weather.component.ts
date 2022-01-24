import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WeatherSearchService } from './weathersearch.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  zip: string = '';
  weather: any;
  searchSubject = new Subject();
  constructor(private weatherSearchService: WeatherSearchService) { }

  ngOnInit(): void {
  this.searchSubject
    .pipe(debounceTime(1000), distinctUntilChanged())
    
    .subscribe(zip => {
      console.log(this.zip);

      this.weatherSearchService.createAPIObservable(zip).subscribe(response => {
        console.log(response);

        this.weather = response;
      });
  });
}

  findWeather(zip: string): void{
    this.searchSubject.next(zip);


  }


}
