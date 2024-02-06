import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JsonPipesInAngular16';
  public empooyees = [
    {
      "ID":1,
      "Name":"dineshyaduvanshee",
      "Address":"ghatKoper",
    },
    {
      "ID":2,
      "Name":"Dinesh Yadav",
      "Address":"Thane",
    },{
      "ID":2,
      "Name":"Dinesh Kumar",
      "Address":"CSMT",
    },{
      "ID":3,
      "Name":"Ramesh",
      "Address":"UP",
    },{
      "ID":4,
      "Name":"Rakesh",
      "Address":"Bihar",
    },{
      "ID":5,
      "Name":"Deepak",
      "Address":"madhubani",
    }
  ];
  printData(){
  console.log(this.empooyees);
  
  }
}


