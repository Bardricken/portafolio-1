import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl: string = environment.weatherUrl;
  options = {
    enableHighAccuracy: true,
    maximumAge: 0,
  };

  constructor(private http: HttpClient) {}

  getWeather(coordinates: any): Observable<Weather> {
    return this.http.get<Weather>(
      `${this.baseUrl}&lat=${coordinates.lat}&lon=${coordinates.lon}`
    );
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          reject({ error: 'Clima no disponible' });
        },
        this.options
      );
    });
  }
}
