import { CommonModule } from '@angular/common';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


interface DialogData {
  name: string;
}
@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})

export class PopUpComponent implements OnInit{
  
  submit(userLogin: any) {
    
      console.log('ketdi!', userLogin );
  }
 
  ngOnInit(): void {
    
  }
}
