import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjsinaction',
  templateUrl: './rxjsinaction.component.html',
  styleUrls: ['./rxjsinaction.component.css']
})
export class RxjsinactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Using a setTimeout
      // const panel = document.getElementById('panel');
      //   const source$ = Observable.create(observer => {
      //     const timeoutId = setTimeout(() => {
      //       observer.next();
      //       observer.complete();
      //     }, 1000);
      //     return () => clearTimeout(timeoutId);
      // });
      // source$.subscribe(
      //   colorPanel,
      //   error => console.log('error', error),
      //   () => console.log('complete')
      //   );
      // function colorPanel() {
      //   panel.style.backgroundColor = 'red';
      // }

  // Using RxJS timer function
    // Observable.timer(1000)
    // .subscribe(colorPanel);

    // function colorPanel() {
    //   panel.style.backgroundColor = 'red';
    // }

  // Create a stock ticker...
    const priceElement = document.getElementById('price');
      const newRandomNumber = () => Math.floor(Math.random() * 100);
      function Money(currency, val) {
        return {
          value: function () {
            return val;
          },
          currency: function () {
            return currency;
          },
          toString: function () {
            return `${currency} ${val}`;
          }
        };
      }
      Observable.interval(2000)
        .timeInterval()
        .skip(1)
        .take(5)
        .do(int =>
            console.log(`Checking every ${int.interval} milliseconds`))
        .map(int => Money('USD', newRandomNumber()))
        .subscribe(price => {
            console.log(price.toString());
            priceElement.innerHTML = (price.toString());
          });

  }
}
