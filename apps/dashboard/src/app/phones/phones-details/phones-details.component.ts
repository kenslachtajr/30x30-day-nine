import { Phone } from '@phones/core-data';
import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'phones-phones-details',
  templateUrl: './phones-details.component.html',
  styleUrls: ['./phones-details.component.css']
})
export class PhonesDetailsComponent implements OnInit {
  currentPhone: Phone;
  originalTitle;

  @Input() form: FormGroup;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set phone(value) {
    this.originalTitle = value.title;
    this.currentPhone = Object.assign({}, value);
  }

  constructor() {}

  ngOnInit() {}

  saveForm(formDirective: NgForm) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
