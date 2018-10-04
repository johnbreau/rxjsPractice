import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-pluralsight',
  templateUrl: './pluralsight.component.html',
  styleUrls: ['./pluralsight.component.css']
})
export class PluralsightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //
  //   const numbers = [1, 3, 5, 7, 4, 2, 7];

  //  const source = Observable.create(observer => {
  //    for (const n of numbers) {
  //      if (n === 5) {
  //        observer.error('something went wrong');
  //      }
  //      observer.next(n);
  //    }
  //    observer.complete();
  //  });

  //  source.subscribe(
  //    value => console.log('value', value),
  //    error => console.log('error', error),
  //    () => console.log('complete')
  //  );

//

// let numbers = [1,3,5,7,4,2,7];

//    let source = Observable.create(observer => {

//      let index = 0;
//      let produceValue = () => {
//        observer.next(numbers[index++])

//        if (index < numbers.length) {
//          setTimeout(produceValue, 2000);
//        } else {
//        observer.complete();
//        }
//      }
//      produceValue();
//    }).map(n => n*2)
//    .filter(n => n > 4);

// //

    const circle = document.getElementById('circle');
    const source = Observable.fromEvent(document, 'mousemove')
    .map(( e: MouseEvent) => {
      return {
        x: e.clientX,
        y: e.clientY,
      };
    })
    .filter(value => value.x > 100);

    function onNextMove(value) {
      console.log(circle);
      console.log(value);
      circle.style.left = value.x + 'px';
      circle.style.top = value.y + 'px';
    }

    source.subscribe(
      // value => console.log('x', value));
    onNextMove,
    error => console.log('error', error),
    () => console.log('complete')
    );
  }

}
