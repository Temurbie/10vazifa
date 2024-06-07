import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';





@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})

export class PopUpComponent implements OnInit{
  profileGroup: FormGroup<{ fName: FormControl<string | null>; lName: FormControl<string | null>; company: FormControl<string | null>; email: FormControl<string | null>; code: FormControl<string | null>; phone: FormControl<string | null>; sub: FormControl<string | null>; radio: FormControl<string | null>; }>;
fName: any;
  
  submit(userLogin: any) {
    
      console.log('ketdi!', userLogin );
  }
  
  
  constructor(private fb: FormBuilder){
    this.profileGroup =this.fb.group({
      fName : ['',[ Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
      lName : ['', [ Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
      company :['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      email : ['', [Validators.required, Validators.email]],
      code : ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      phone : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]],
      sub : ['', [Validators.required]],
      radio : ['', [Validators.required]]
    })
  }



 
  onSubmit(){
    console.log(this.profileGroup.value)
  }

  openModal():void {
    const modal = document.getElementById('myModal');
    if(modal != null){
      modal.style.display = "block"
    }
  }

  closeModal(): void {
    const modal = document.getElementById('myModal');
    if(modal != null){
      modal.style.display = "none"
    }
  }

  ngOnInit(): void {
    
  }
}
