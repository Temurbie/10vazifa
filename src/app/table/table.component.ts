import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  data: any[] = [];
  foundEl: any [] = [];

  htttpCLient = inject(HttpClient)
  e: any;


  ngOnInit(): void {
    this.getFetch()
  }

  getFetch(){
    this.htttpCLient.get('https://jsonplaceholder.typicode.com/users').subscribe((date : any)=>{
      console.log(date);
      this.data = date
    })
  }

  getElement(){
    this.getFetch();
  }

  findId(id:any){
    
    const  foundId = this.data.find(item => item.id === Number(id));
    if(foundId){
      this.foundEl.push(foundId)
    }else{
      console.log("Not found")
    }
    return this.foundEl
  }
}
