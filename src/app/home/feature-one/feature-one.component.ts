import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.css']
})
export class FeatureOneComponent implements OnInit {

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
