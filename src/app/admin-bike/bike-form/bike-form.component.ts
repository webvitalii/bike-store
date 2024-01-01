import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BikeInterface } from '@app/core/interfaces/bike.interface';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.scss']
})
export class BikeFormComponent implements OnInit {
  @Input() postInput: BikeInterface;
  @Output() formSubmitEvent = new EventEmitter<BikeInterface>();

  bikeTypes = [
    { key: 'road', value: 'Road Bike' },
    { key: 'mountain', value: 'Mountain Bike' },
    { key: 'hybrid', value: 'Hybrid Bike' },
    { key: 'cruiser', value: 'Cruiser Bike' },
    { key: 'electric', value: 'Electric Bike' },
  ];

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      bikeType: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      qty: new FormControl('', [Validators.required, Validators.min(1)]),
    });

    if (this.postInput?.id) {
      this.form.patchValue(this.postInput);
    }
  }

  submit() {
    if (this.form.invalid) {
      return false;
    }
    this.formSubmitEvent.emit(this.form.value);
  }
}
