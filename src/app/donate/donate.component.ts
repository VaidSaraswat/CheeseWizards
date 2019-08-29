import { Component, OnInit } from '@angular/core';
import { Api2Service } from '../api2.service';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  constructor(private api2service: Api2Service) { }

  ngOnInit() {
    this.api2service.getTemplate();
  }

}
