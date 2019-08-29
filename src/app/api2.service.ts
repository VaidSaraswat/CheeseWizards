import { Injectable } from '@angular/core';
import { APIClient } from "openlaw";

@Injectable({
  providedIn: 'root'
})
export class Api2Service {
  apiClient = new APIClient("https://app.openlaw.io");

  public getTemplate(){
    this.apiClient.login("robyn@analyticly.io", "Education420");
    this.apiClient.getTemplate("Pls work erc").then(result => {
      console.log(result);
    });
    //return this.apiClient.getTemplate("Pls work erc");
  }
  constructor() { }
}
