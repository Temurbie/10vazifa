import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

export interface tile{
  color:string;
  cols:number;
  rows:number;
  text:string
}

@Component({
  selector: 'app-gird',
  standalone: true,
  imports: [
    GirdComponent,
    MatGridListModule,
    CommonModule
      
  ],
  templateUrl: './gird.component.html',
  styleUrl: './gird.component.scss'
})
export class GirdComponent {
  tiles:tile[] = [
    {
      color: "red",
      cols: 1,
      rows: 1,
      text : 'Rang'
    },
    {
      color: "green",
      cols: 1,
      rows: 1,
      text : 'Rang'
    },
    {
      color: "yellow",
      cols: 1,
      rows: 1,
      text : 'Rang'
    },
    {
      color: "blue",
      cols: 1,
      rows: 1,
      text : 'Rang'
    },
    {
      color: "pink",
      cols: 1,
      rows: 1,
      text : 'Rang'
    },
    {
      color: "brown",
      cols: 1,
      rows: 1,
      text : 'Rang'
    },
  ];
}
