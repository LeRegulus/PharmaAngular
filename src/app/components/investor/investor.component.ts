import { Component, OnInit } from '@angular/core';
import {Quarter} from "../../Quarter";
import {QuarterService} from "../../services/quarter.service";

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {
  quarters: Quarter[] = [];
  name: any;
  actived: boolean = true;
  year: any;

  constructor(private quarterService: QuarterService) { }

  ngOnInit(): void {
    this.quarterService.getAll().subscribe((res) =>{
      this.quarters = res;
    });
  }

  Search(){
    if (this.name == "" || this.name == ""){
      this.ngOnInit();
    }else {
      this.actived = false;
      let quart = this.name + this.year;
      this.quarters = this.quarters.filter(res => {
         return  res.name.toLowerCase().match(quart.toLowerCase());
      });

    }
  }


}
