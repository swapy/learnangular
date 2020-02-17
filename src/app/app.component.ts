import { Component } from '@angular/core';
//import { StockInterface } from './services/stock.service';
import { StockService, StockInterface } from './services/stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stocks';
  stocks: Array<StockInterface>;

  constructor(service: StockService) {
    service.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }

}
