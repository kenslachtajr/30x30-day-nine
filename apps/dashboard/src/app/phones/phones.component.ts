import { Component, OnInit } from '@angular/core';
import { Phone, PhonesService } from '@phones/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from '@phones/core-data';

@Component({
  selector: 'phones-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  form: FormGroup;
  selectedPhone: Phone;
  phones$;

  constructor(
    private phonesService: PhonesService,
    private fb: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.resetPhone();
    this.getPhones();
  }

  selectPhone(phone: Phone) {
    this.form.patchValue(phone);
    this.selectedPhone = phone;
  }

  getPhones() {
    this.phones$ = this.phonesService.all();
  }

  resetPhone() {
    const emptyPhone: Phone = {
      id: null,
      brand: '',
      name: ''
    };
    this.selectPhone(emptyPhone);
  }

  createPhone(phone: Phone) {
    this.phonesService.create(phone).subscribe(r => {
      this.notify.notification('Successfully Create A Phone');
      this.resetPhone();
      this.getPhones();
    });
  }

  cancel() {
    this.resetPhone();
    this.form.reset();
  }

  savePhone(phone: Phone) {
    if (phone.id) {
      this.updatePhone(phone);
    } else {
      this.createPhone(phone);
    }
  }

  updatePhone(phone: Phone) {
    this.phonesService.update(phone).subscribe(r => {
      this.notify.notification('Successfully Update A Phone');
      this.resetPhone();
      this.getPhones();
    });
  }

  deletePhone(phone: Phone) {
    this.phonesService.delete(phone).subscribe(r => {
      this.notify.notification('Successfully Deleted A Phone');
      this.resetPhone();
      this.getPhones();
    });
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      brand: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])]
    });
  }
}
