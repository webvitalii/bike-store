import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BikeService } from '@app/core/services/bike.service';
import { BikeInterface } from '@app/core/interfaces/bike.interface';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.scss']
})
export class BikeFormComponent implements OnInit {
  @Input() postInput: BikeInterface;
  @Output() formSubmitEvent = new EventEmitter<BikeInterface>();

  bikeTypes = this.bikeService.bikeTypes;
  ratings = [1, 2, 3, 4, 5];

  form: FormGroup;

  constructor(public bikeService: BikeService) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      bikeType: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      qty: new FormControl('', [Validators.required, Validators.min(1)]),
      rating: new FormControl('', [Validators.required, Validators.min(1)])
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
