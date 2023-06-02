import { Component } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Campusna_test';
  show :boolean = false
  city=["tunis","alger","egypt","maroc","libye"]
  cityChosen:any
   citys : any={
    tunis:{latitude :36.82,longitude: 10.17},
    maroc:{latitude :28.50,longitude: -10.00},
    alger:{latitude :28.00,longitude: 3.00},
    Mauritania:{latitude :20.25,longitude: -10.50},
    libye:{latitude :28.00,longitude: 17.00},
    egypt:{latitude :27.00,longitude: 30.00},
    sudan:{latitude :16.00,longitude: 30.00},
    chad:{latitude :15.00,longitude: 19.00},
    niger:{latitude :18.00,longitude: 9.00},
    mali:{latitude :18.00,longitude: -2.00},

   }
   cityData:any
  constructor(private http:HttpClient){}
 
  getWeatherData(latitude: number, longitude: number): Observable<any> {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&timezone=Africa%2FCairo`;
  
    return this.http.get<any>(apiUrl);
  }
  onGetWeatherData(): void {
    const latitude = this.citys[this.cityChosen].latitude; // Set your desired latitude value
    const longitude = this.citys[this.cityChosen].longitude; 
    console.log(JSON.stringify(this.cityChosen))
    this.getWeatherData(latitude, longitude).subscribe(
      (response) => {
        // Handle the API response here
        this.cityData=response
        this.show=true
        console.log(this.cityData);
      },
      (error) => {
        // Handle errors, if any
        console.error(error);
      }
    );
  }
}
