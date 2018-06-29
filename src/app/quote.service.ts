import { Injectable } from '@angular/core';
import { QUOTES } from './quotes';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  getQuote():  Observable<string> {
    var index = Math.floor(Math.random() * 3);
    var randomQuote = QUOTES[index];
    return of(randomQuote);
  };
  constructor() { }
}
