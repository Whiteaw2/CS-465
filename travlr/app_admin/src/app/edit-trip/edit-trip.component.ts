import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from 'services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  deleted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    // retrieve stashed trip Id
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('EditTripComponent#ngOnInit found tripCode: ' + tripCode);

    // initialize form
    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });

    

  console.log('EditTripComponent#ngOnInit calling TripDataService#getTrip(' + tripCode);
  this.tripService.getTrip(tripCode)
    .then(data => {
      console.log(data);
      this.editForm.patchValue(data);
    });
  }

  onSubmit() {
  this.submitted = true;

  if (this.editForm.valid) {
    this.tripService.updateTrip(this.editForm.value)
      .then(data => {
        console.log(data);
        this.router.navigate(['']);
      });
  }
}

  onDelete() {
    this.deleted = true;
  
    if (this.editForm.valid) {
      this.tripService.deleteTrip(this.editForm.value)
        .then(data => {
          console.log(data);
          this.router.navigate(['']);
        });
    }
}

// get form short name to access form fields
get f() { return this.editForm.controls; }
}