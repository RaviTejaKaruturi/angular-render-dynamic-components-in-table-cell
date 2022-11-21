import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../feat/feat-one';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  @Input() data: PeriodicElement[];
  dataSource = new MatTableDataSource<PeriodicElement>();
  displayedColumns: string[] = [
    'position',
    'name',
    'weight', //'symbol'
  ];

  ngOnInit() {}

  trackTask(index: number, item: PeriodicElement): number {
    return item.position; //`${item.position}`;
  }

  ngOnChanges() {
    console.log('table - ngOnChanges');
    this.dataSource.data = this.data;
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
