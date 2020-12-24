import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internau',
  templateUrl: './internau.component.html',
  styleUrls: ['./internau.component.css']
})
export class InternauComponent implements OnInit {

  constructor() { }
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  lat1 = 51.978418;
  lng1 = 7.909007;
  onChoseLocation(event:any)
  {
    console.log(event.coords.lat);
  }
  ngOnInit(): void {
  }

}
