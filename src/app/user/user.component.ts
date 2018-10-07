import { Component, OnInit } from '@angular/core';
import { User, Address, Phone } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user : User;
  
  userInit() {
    this.user = new User()
    this.user.firstName = "firstName";
    this.user.lastName = "lastName";
    this.user.address = new Address();
    this.user.address.street1 = "street1";
    this.user.address.street2 = "street2";
    this.user.address.street3 = "street3";
    this.user.phone = new Array<Phone>();
    this.addPhone(1);
  }
  addPhone(min :number):void {
    let i;
    for (i = 0; i<min; i++) {
      this.user.phone.push(new Phone());
    }
  }

  ngOnInit() {
  this.userInit();

  }


}
