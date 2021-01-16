import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $ : any;

@Component({
  selector: 'app-trade-book',
  templateUrl: './trade-book.component.html',
  styleUrls: ['./trade-book.component.css']
})
export class TradeBookComponent implements OnInit {


   form : FormGroup;
   submitted: false;
  checkme: any =[];
  items: any;
    

  constructor( private fb : FormBuilder) { }
   
  ngOnInit() {
    this.form = this.fb.group({
      'name': ['', [Validators.required, Validators.min(2)]],
      'lname': ['', [Validators.required]],
      'check':[null],
      'address':[null],
      'country':[null],
      'city':[null],
      'gender':[null],
      'pincode':['',[Validators.required,Validators.pattern]],
      'mobile':['',[Validators.required,Validators.maxLength(10)]],
      'email':['',[Validators.required, Validators.email]]
    });
  }


 get fval(){   
   return this.form.controls;

 }

 get name(){
   return this.form.get('name');
 }
 
 get lname(){
  return this.form.get('lname');
}
get email(){
  return this.form.get('email');
}



 onSubmit(){
   
  alert('k');
  console.log(this.form);
  console.log(this.checkme);
  
 }


 Changebox(e){
   let index = this.checkme.indexOf(e.target.value);
   if(index == -1){ 
     this.checkme.push(e.target.value);
   }
   else{
     this.checkme.splice(index,1);
   }
 }

 additem(){
   const value = $('#additems').val();
   if((value || '').trim()){
    this.items.push(value);
   }
   
   
 }

































}
