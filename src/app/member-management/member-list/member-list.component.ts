import { Member } from '../../shared/classes/member';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
@Input() members: Member[];

@Output() env = new EventEmitter<Member>();
@Output() edit = new EventEmitter<Member>();


  constructor() { }

  ngOnInit(): void {
  }

  deleteRecord(m){
    this.env.emit(m);
  }

  editRecord(m){
    this.edit.emit(m);
  }
}
