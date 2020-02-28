import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from '@phones/core-data';

@Component({
  selector: 'phones-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent implements OnInit {
  @Input() phones: Phone[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
