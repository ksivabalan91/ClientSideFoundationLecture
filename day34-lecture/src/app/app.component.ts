import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Weather } from './model';
import { Observable, Subscription, firstValueFrom, map } from 'rxjs';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'

const WEATHER_API_KEY = '112bfba7550020c714a8208e3c6d3f61'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  form!: FormGroup
  weather$!: Subscription
  weatherObs$!: Observable<Weather[]>

  result: Weather[] =[]
  // result!: any

  constructor(private fb:FormBuilder, private http: HttpClient){}
  ngOnDestroy(): void {
    this.weather$.unsubscribe()
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      city: this.fb.control('',[Validators.required])
    })
  }
  getWeatherWithObservable(){
    this.weatherObs$ = this.getWeather()
  }

  getWeatherWithSubscription(): any{
    //unsubcribe first before subscribing
    if(this.weather$)
    this.weather$.unsubscribe()

    this.getWeather()
      .subscribe({
        next: v =>{
          console.info(">>> NEXT")
          this.result = v
        },
        error: err =>{
          console.error(">>> ERROR",err)
        },
        complete: () =>{
          console.warn(">>> Complete")
        }
      })
  }

  getWeatherWithPromise(){
    // converts the first value of the observable
    // into a promise, lastValueFrom()
    firstValueFrom(
      // returns an observable
      this.getWeather()).then( v =>{
        this.result = v
      }).catch( err =>{
        console.error("error: ", err)
      })
  }

  getWeather(){
    const city = this.form.value['city']
    console.info(`City: ${city}`)

    const params = new HttpParams().set('q',city).set('appid',WEATHER_API_KEY)

    //unsubcribe first before subscribing
    if(this.weather$)
    this.weather$.unsubscribe()

    // returns an observable
    return this.http.get<Weather[]>(WEATHER_URL,{ params })
    .pipe(
      map((v:any)=>{
        // .main.temp
        const temp = v['main']['temp']
        // .weather
        const weather = v['weather'] as any[]
        return weather.map(w =>{
          return {
            // .weather[*].main
            main: w['main'],
            // .weather[*].description
            description: w['description'],
            // .weather[*].icon
            icon: w['icon'],
            temperature: temp
          } as Weather
        } )
      })
    )
  }
}
