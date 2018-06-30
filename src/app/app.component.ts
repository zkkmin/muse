import { Component, ViewChild } from '@angular/core';
import { RandomQuoteComponent } from './random-quote/random-quote.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(RandomQuoteComponent)
  private randomQuoteComponent: RandomQuoteComponent;

  title = 'Muse';
  
  onClickMe() {
    this.randomQuoteComponent.getQuote();
  }
}
