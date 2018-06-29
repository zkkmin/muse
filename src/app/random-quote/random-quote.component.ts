import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  getQuote(): void {
    this.quoteService.getQuote()
      .subscribe(quote => this.quote = quote);
  }

  quote: string;

  ngOnInit() {
    this.getQuote();
  }

}
