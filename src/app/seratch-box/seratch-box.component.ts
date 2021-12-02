import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seratch-box',
  templateUrl: './seratch-box.component.html',
  styleUrls: ['./seratch-box.component.scss']
})
export class SeratchBoxComponent implements OnInit {

  constructor() { }

  onChange(e:Event): void {
    console.log(e);
  };
  getValue(e:Event): string {
    return (e.target as HTMLInputElement).value;
  }
  ngOnInit(): void {
  }

}
