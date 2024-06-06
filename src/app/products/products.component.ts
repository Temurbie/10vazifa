import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

    products = [
      { id:"ABC012",
        maxsulot: "Olma",
        narx: 8000,
        
      },
      { id:"ABC013",
        maxsulot: "Uzum",
        narx: 12500,

      },
      { id:"ABC014",
        maxsulot: "Anor",
        narx: 17000,

      },
      { id:"ABC015",
        maxsulot: "Olcha",
        narx: 20000,

      }
    ]
product: any;


  ngOnInit(): void {
    
  }

}
