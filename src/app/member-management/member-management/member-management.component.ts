import { members } from './../../shared/data/members';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Member } from 'src/app/shared/interfaces/member';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  formGroup: FormGroup;
  members: Member[];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.members = members;
    this.formGroup = this.fb.group({
      name:'',
      dni:''
    })
  }

  recibir(member){
    if (this.members.some(e => e.dni === member.dni)){
      this.members.splice(this.members.findIndex(e=>e.dni==member.dni),1,member);
    }else{
      this.members.push(member);
    }

    this.formGroup.controls['dni'].enable();
  }
  modificar(m){
    this.formGroup = this.fb.group({
      name:m.name,
      dni: m.dni
    });
    this.formGroup.controls['dni'].disable();
  }

  delete(m){
    this.members.splice(this.members.findIndex(e=>e.dni==m.dni),1);
  }

}
