import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  
})

export class BodyComponent implements OnInit {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  foods: Food[] = [
    {value: 'tamilnadu', viewValue: 'tamilnadu'},
    {value: 'karnataka', viewValue: 'karnataka'},
    {value: 'kerala', viewValue: 'kerala'}
  ];
  ngOnInit() {
  }

}
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
