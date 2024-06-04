import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservice.service';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrl: './country-data.component.css'
})
export class CountryDataComponent implements OnInit {
  highlightedCountry: string = '';
  countryData: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getHighlightedCountry().subscribe((country: string) => {
      this.highlightedCountry = country;
      if (this.highlightedCountry) {
        this.fetchCountryData(this.highlightedCountry);
      }
    });
  }

  fetchCountryData(countryCode: string) {
    this.dataService.getCountryData(countryCode).subscribe((data: any) => {
      this.countryData = data[1][0];
      console.log(this.countryData.name)
      console.log(this.countryData.capitalCity)
      console.log(this.countryData.region.value)
      console.log(this.countryData.incomeLevel.value)
      console.log(this.countryData.longitude)
      console.log(this.countryData.latitude)
    });
  }
}
