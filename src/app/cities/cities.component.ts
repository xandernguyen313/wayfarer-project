import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CITIES } from '../cities';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  city: any;
  cityIndex: string = '';
  searchText: string = '';
  weather: any;
  title: any;
  description: any;
  postArray: any = [];

// let's make the URL routes available to class 
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cityIndex = params.get('id') || '';

      this.city = CITIES.find(city => {
  
        return city.id === parseInt(this.cityIndex);
        
    

      })
      this.getWeatherDetails()
    })
 
  
  }

  get sortByLastModified() {
    return this.city.posts.sort((a: any, b: any) => {
      return <any>new Date(b.lastModified) - <any>new Date(a.lastModified);
    })
  }

  redirectToPost(currentPost: any){
    this.router.navigate(['post'], {state: {currentPost: currentPost}});
  }
 getWeatherDetails() {
    console.log(this.city.name)
   this.http
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city.name}&appid=36567fd0102b929dc578b574dbc63eeb&&units=imperial`)
    .subscribe(response => {
      this.weather = response
    }) 

  }
  post() {
    this.city.posts.push({
      title: this.title,
      description: this.description,
    })
  }
  }


