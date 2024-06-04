import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  
  private highlightedCountrySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setHighlightedCountry(country: string) {
    this.highlightedCountrySubject.next(country);
  }

  getHighlightedCountry(): Observable<string> {
    return this.highlightedCountrySubject.asObservable();
  }

  getCountryData(countryCode: string): Observable<any> {
    const url = `http://api.worldbank.org/v2/country/${countryCode}?format=json`;
    return this.http.get(url);
  }
}
