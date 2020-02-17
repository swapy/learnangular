import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

let stocks: Array<string> =['AAPL','GOOG','AMZN','TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StockService {

  constructor(private http: HttpClient){

  }
  
  get() {
    return stocks.slice();
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock),1);
  }

  load(symbols) {
    if(symbols) {
        return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());        
    }
  }

}
