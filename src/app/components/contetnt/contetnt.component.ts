import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contetnt',
  templateUrl: './contetnt.component.html',
  styleUrls: ['./contetnt.component.css']
})
export class ContetntComponent implements OnInit {

  constructor() { }

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  lat1 = 51.978418;
  lng1 = 7.909007;

  ngOnInit(): void {

  }

}