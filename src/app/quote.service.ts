import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quoteUrl = "https://talaikis.com/api/quotes/random/";

  getQuote():  Observable <{}> {
  
    return this.http.get(this.quoteUrl)

  };
  constructor(
    private http: HttpClient
  ) { }
}
