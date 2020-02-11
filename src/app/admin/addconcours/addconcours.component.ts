import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {  ConcourService } from '../../services/concours.service';

@Component({
  selector: 'app-addconcours',
  templateUrl: './addconcours.component.html',
  styleUrls: ['./addconcours.component.css']
})

export class AddconcoursComponent implements OnInit {


  loginForm: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private concourService:ConcourService
) {
    
}
ngOnInit() {

  this.loginForm = this.formBuilder.group({
    nom:  ['', Validators.required],
    type:  ['', Validators.required],
    desc: ['', Validators.required],
    date_deb: ['', Validators.required],
    date_fin: ['', Validators.required],
  });

}

get f() { return this.loginForm.controls; }

onSubmit() {

  this.submitted = true;

  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;

  
  this.concourService.add(this.loginForm.value)
      .pipe(first())
      .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['/admin/concours']);
          
          },
          error => {

            console.log(error)
              this.loading = false;
          });
}

}

