import { NotifyService } from '@phones/core-data';
import { PhonesService, Phone } from '@phones/core-data';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'phones-phones-item',
  templateUrl: './phones-item.component.html',
  styleUrls: ['./phones-item.component.css']
})
export class PhonesItemComponent implements OnInit {
  currentPhone;
  originalTitle;

  public get _currentPhone() {
    return this.currentPhone;
  }

  public set _currentPhone(value) {
    this.currentPhone = value;
  }

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private phoneService: PhonesService,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    const phoneId = this.route.snapshot.params && this.route.snapshot.params.id;
    this.currentPhone = this.phoneService.findPhone(phoneId);
    this.currentPhone
      .pipe(tap((phone: Phone) => (this.originalTitle = phone.name)))
      .subscribe(this.notify.notification('Successfully Loaded A Project'));
  }
}
