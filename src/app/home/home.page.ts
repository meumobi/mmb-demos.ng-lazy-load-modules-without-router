import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <ul>
      <li *ngFor="let item of data">
        <a [title]="item.label" [routerLink]="['/detail', item.id]">
          {{ item.label }}
        </a>
      </li>
    </ul>
  `,
  styles: [
  ],
})
export class HomePage implements OnInit {

  data = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    label: `Value ${i}`,
  }));

  constructor() { }

  ngOnInit(): void {
  }

}
