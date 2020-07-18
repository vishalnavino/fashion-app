import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isShowing:boolean = true;
  form:FormGroup;
  constructor(public fb: FormBuilder){

  }

  mouseenter() {
 
      this.isShowing = true;
  
  }

  mouseleave() {
      this.isShowing = false;
  
  }

  ngOnInit(){
    this.form = this.fb.group({
      first:[]
    })
  }

  onSubmit(){

  }

}
