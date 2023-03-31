import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/services/mock-data/mock-data.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mockService: MockDataService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      contact_name: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
    })
  }

  onFormSubmit() {
    this.mockService.addNewContact(this.form.value);
    this.router.navigate(['']);
  }
}
