import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blx-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() columns!: string[];
  @Input() rows: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.columns);
  }

}
