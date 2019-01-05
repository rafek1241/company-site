import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  public categories = [
    {
      id: 1,
      active: 0,
      caption: "Category",
      subcategories: []
    },
    {
      id: 2,
      active: 1,
      caption: "Category",
      subcategories: [
        {
          id: 5,
          active: 0,
          caption: "Category",
          subcategories: []
        },
        {
          id: 6,
          active: 0,
          caption: "Category",
          subcategories: [
            {
              id: 7,
              active: 1,
              caption: "Category",
              subcategories: []
            },
            {
              id: 8,
              active: 0,
              caption: "Category",
              subcategories: []
            },
            {
              id: 9,
              active: 0,
              caption: "Category",
              subcategories: []
            }
          ]
        },
        {
          id: 10,
          active: 1,
          caption: "Category",
          subcategories: []
        }
      ]
    },
    {
      id: 3,
      active: 0,
      caption: "Category",
      subcategories: []
    },
    {
      id: 4,
      active: 0,
      caption: "Category",
      subcategories: []
    }
  ];

  constructor() {}

  ngOnInit() {}
}
