import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.scss'
})
export class ProductsDetailComponent {
  // products_id!:string;

  // constructor(private actRoute: ActivatedRoute){
  //   this.products_id = this.actRoute.snapshot.params['id'];
  // }
}
