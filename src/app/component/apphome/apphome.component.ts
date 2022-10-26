import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apphome',
  templateUrl: './apphome.component.html',
  styleUrls: ['./apphome.component.css']
})
export class ApphomeComponent implements OnInit {
       
  weather:any
  icon:any
  temperature: any;
  date:any
  time:any    
  constructor( private http:HttpClient) { }

  ngOnInit(): void {
      
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=kochi&appid=71a628386e5edaca73fcc28f75452978`).subscribe((result)=>{
      this.fillData(result)
    })
                   }

search = (input:any) =>{
    var city = input.value
  this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71a628386e5edaca73fcc28f75452978`).subscribe((result)=>{
    this.fillData(result)
    },
    result=>{
      alert(result.error.message)
    }

    )}
  
fillData = (result:any) =>{
this.weather = result
this.temperature = (((this.weather.main.temp)-273)).toFixed(1)
this.icon = `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
this.time = new Date((this.weather.dt) * 1000).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
}    
}
