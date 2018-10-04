import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-random-practice',
  templateUrl: './random-practice.component.html',
  styleUrls: ['./random-practice.component.css']
})
export class RandomPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Subsribe to button clicks, increment and dispaly...
      //   const button = document.getElementById('button');
      //   const display = document.getElementById('display');
      //   const source = Observable.fromEvent(button, 'click');
      //   let num = 0;

      //   function incrementNumber() {
      //     num++;
      //     display.innerHTML = num.toString();
      //   }

      //   source.subscribe(() =>
      //     incrementNumber()
      //   );
  }
}
