import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-category-entry",
  templateUrl: "./category-entry.component.html",
  styleUrls: ["./category-entry.component.scss"]
})
export class CategoryEntryComponent implements OnInit {
  @Input()
  public collection: any[] = [];

  @Input()
  public parent: any = null;

  selectOrExpandCategory(obj) {
    console.log(this.collection, this.parent);
  }

  constructor() {}

  ngOnInit() {}
}
