import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {
  @Input() cityData:any
  @Input() city:any
  constructor(){
    
    

  }
  ngOnInit(){
    console.log("azeazeazeaze")
    console.log(this.cityData)
  }
}
