import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-main-303',
    templateUrl: './main-303.component.html',
    styleUrl: './main-303.component.scss'
  })

export class Main303 implements OnInit{
  numberOf303: number[] = [];

  ngOnInit(): void {
    this.initilize303Array(this.numberOf303);
  }

  private initilize303Array(array: number[]): void{
    array.length = 10;
  }


}