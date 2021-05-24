import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { WeatherService } from '../../services/weather.service';
import { Data } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  github: string = 'https://github.com/Bardricken';
  linkedin: string =
    'https://www.linkedin.com/in/bastian-andrés-valdenegro-ubeda-0854491a5/';
  annio: number = new Date().getFullYear();
  nombre: string = `Bastian Valdenegro ${this.annio}`;
  climaMsj: string = '';
  weather!: Data[];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private ws: WeatherService
  ) {
    this.iconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/github.svg'
      )
    );
    this.iconRegistry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/linkedin.svg'
      )
    );
  }

  ngOnInit(): void {
    this.ws
      .getPosition()
      .then((coords) => {
        this.ws
          .getWeather(coords)
          .subscribe((resp) => (this.weather = resp.data));
      })
      .catch((error) => (this.climaMsj = error.error));
  }
}
