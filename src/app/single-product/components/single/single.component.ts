import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-single",
  templateUrl: "./single.component.html",
  styleUrls: ["./single.component.sass"]
})
export class SingleComponent implements OnInit {
  rate = 4;
  imgs = [
    "../../../../assets/sh1.webp",
    "../../../../assets/sh24.jpg",
    "../../../../assets/sh3.jpg",
    "../../../../assets/sh4.jpg"
  ];
  constructor() {}

  ngOnInit() {}
}
