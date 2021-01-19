import { splitClasses } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $ : any;
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-trade-book',
  templateUrl: './trade-book.component.html',
  styleUrls: ['./trade-book.component.css']
})
export class TradeBookComponent implements OnInit {


   form : FormGroup;
   submitted: false;
  checkme: any =[];
  items = [];
  invoice: string;
    

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
      'email':['',[Validators.required, Validators.email]],
      'addmenu':[null]
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

 additems(){
   const value = $('#additemmenu').val();
   if((value || '').trim()){
     this.items.push(value);
     $('#additemmenu').val('');
   }
 }

 remove(e){
   const indexItems = this.items.indexOf(e);
   if(indexItems >= 0){
      this.items.splice(indexItems,1);
   }
 }


 generatePdf(pdfgenerator){
  var data = document.getElementById('pdfgenerator');
 html2canvas(data).then(canvas => {
   var imgWidth = 200;
    var imgHeight = canvas.height * imgWidth / canvas.width;
   const contentDataURL = canvas.toDataURL('application/pdf')
   let pdf = new jspdf('p', 'mm', 'a4');
   var position = 0;
   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
   pdf.save("ORDNO"+pdfgenerator+".pdf");
   var blobPDF = pdf.output('blob');
   // var blobPDF1 = pdf.output();
  // var blobUrl = URL.createObjectURL(blobPDF)
 //  window.open(blobUrl,'_system','location=yes')
 //  this.PrintOrderId = qrprint3;
   this.invoice="BillInvoice";
   $('#printModal').css("display","none")
 });
}


}
