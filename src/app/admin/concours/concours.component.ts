import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {  ConcourService } from '../../services/concours.service';
import { Concour } from 'src/app/models/concour';


@Component({
  selector: 'app-concours',
  templateUrl: './concours.component.html',
  styleUrls: ['./concours.component.css']
})
export class ConcoursComponent implements OnInit {

  concours: Concour[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private concourService:ConcourService
) {
    
}

  ngOnInit() {
    this.loadAllConcours()
  }


  private loadAllConcours() {
    this.concourService.all().pipe(first()).subscribe(res => {
        this.concours = res;
        console.log(this.concours)
    });
}

remove(id: String) {
  this.concourService.remove(id).pipe(first()).subscribe(() => {
    this.loadAllConcours()
  });
}

}
