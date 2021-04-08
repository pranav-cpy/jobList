import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
 @Input('job') job : any;
 @ViewChild('applyConfirmModal') applyConfirmModal : TemplateRef<any>
 userData={
   name:'',
   email:'',
   mobile:'',
   resumeFile:[],
   tc:true
 }
 
 modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    console.log("job",this.job)
  }
 apply(ref){
  this.modalRef = this.modalService.show(ref, { class: 'modal-md modal-dialog-centered', ignoreBackdropClick: true });
 }
 closeDetailModal(){
  this.modalRef.hide();
}
isDisabled(){
  if(this.userData.name === '' || 
  this.userData.email === '' || 
  this.userData.mobile === '' ||
  this.userData.mobile.length !== 10 ||
  this.userData.tc === false ||
  this.userData.resumeFile.length === 0 
  ){
    return true
  }
}
onFileChange(event){
  console.log("change")
  this.userData.resumeFile = event.target.files;
}
completeApply(){
  this.modalRef.hide();

  this.modalRef = this.modalService.show(this.applyConfirmModal, { class: 'modal-md modal-dialog-centered', ignoreBackdropClick: true });
}
}
