import { Component, OnInit, Input } from '@angular/core';

import {ITEMS} from '../data/listItem';
import {Item} from '../type/list-item';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() { }
  listItemsTest = ITEMS;
  @Input() items: Item[] = [];

  ngOnInit(): void {
  }

}
