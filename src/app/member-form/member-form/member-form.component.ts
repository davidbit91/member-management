import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Member } from '../../shared/classes/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  member: Member;
  @Input() formGroup: FormGroup;

  @Output() enviar = new EventEmitter<Member>();

  constructor() { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      dni: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$')
      ]),
    });
  }


  saveRecord(){
    if(this.formGroup.get('name').value != '' && this.formGroup.get('dni').value != ''){
      this.member = new Member();
      this.member.name = this.formGroup.get('name').value;
      this.member.dni = this.formGroup.get('dni').value;
      this.enviar.emit(this.member);
      this.formGroup.reset();

      for(let i of Object.keys(this.formGroup.controls)){
        this.formGroup.controls[i].setErrors(null);
      }
    }
  }
}
