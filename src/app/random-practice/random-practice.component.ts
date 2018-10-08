import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-random-practice',
  templateUrl: './random-practice.component.html',
  styleUrls: ['./random-practice.component.css']
})
export class RandomPracticeComponent implements OnInit {
  public panel: HTMLElement;

  constructor() { }

  ngOnInit() {
    // Drap and drop Observable...
      const panel = document.querySelector('#dragtarget') as HTMLElement;
      const mouseDown$ = Observable.fromEvent<MouseEvent>(panel, 'mousedown');
      const mouseUp$ = Observable.fromEvent<MouseEvent>(document, 'mouseup');
      const mouseMove$ = Observable.fromEvent<MouseEvent>(document, 'mousemove');

      const drag$ = mouseDown$.concatMap(() => mouseMove$.takeUntil(mouseUp$));

      drag$.subscribe(event => {
        panel.style.left = event.clientX + 'px';
        panel.style.top = event.clientY + 'px';
      });

    // Subsribe to button clicks, increment and dispaly...
        const button = document.getElementById('button');
        const display = document.getElementById('display');
        const source = Observable.fromEvent(button, 'click');
        let num = 0;

        function incrementNumber() {
          num++;
          display.innerHTML = num.toString();
        }

        source.subscribe(() =>
          incrementNumber()
        );
  }
}
