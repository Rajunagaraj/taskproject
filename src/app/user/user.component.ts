import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userData:any=[]
  constructor(private userapi:UserService,private route:Router) { }

  ngOnInit(): void {
    this.userapi.getuser().subscribe((res)=>{
      this.userData = res;
    })
  }
  senduser(users:any){
    this.userapi.userdatas = users;
this.route.navigate(['/userdetails'])
  }

}
