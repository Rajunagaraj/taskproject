import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userdetails:any=[];
columheaders = ['Id', 'Name', 'Username', 'Email', 'Address','geo','Phone', 'Website', 'Company'];
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
   this.userdetails.push(this.userservice.userdatas);
  }

}
