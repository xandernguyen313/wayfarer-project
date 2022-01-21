import { Component } from '@angular/core';
import { LONDON, SYDNEY, SAN_FRANCISCO, GIBRALTAR, SEATTLE } from './cities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

london = LONDON;
sydney = SYDNEY;
san_francisco = SAN_FRANCISCO;
gibraltar = GIBRALTAR;
seattle = SEATTLE;
city: string = '';
}

